const https = require("https");
const PaytmChecksum = require("paytmchecksum");

export default async function handler(req, res) {
  // console.log("req.body", req.body);
  if (req.method === "POST") {
    var paytmParams = {};

    paytmParams.body = {
      requestType: "Payment",
      mid: process.env.PAYTM_MID,
      websiteName: process.env.PAYTM_WEBSITE,
      orderId: req.body.oid.toString(),
      callbackUrl: "/api/posttransaction",
      txnAmount: {
        value: req.body.amount,
        currency: "INR",
      },
      userInfo: {
        custId: req.body.email,
      },
    };

    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      process.env.PAYTM_MERCHANT_KEY
    );
    paytmParams.head = {
      signature: checksum,
    };

    var post_data = JSON.stringify(paytmParams);

    const requestAsync = () => {
      return new Promise((resolve, reject) => {
        var options = {
          /* for Staging */
          hostname: "securegw-stage.paytm.in",

          /* for Production */
          // hostname: 'securegw.paytm.in',

          port: 443,
          path: `/theia/api/v1/initiateTransaction?mid=${process.env.PAYTM_MID}&orderId=${req.body.oid}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        var response = "";
        var post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            response += chunk;
          });

          post_res.on("end", function () {
            resolve(response);
          });
        });

        post_req.write(post_data);
        post_req.end();
      });
    };
    let myResp = await requestAsync();
    var respObj = { data: req.body, txnIntRsp: JSON.parse(myResp) };
    console.log("respObj", respObj);
    res.status(200).json(myResp);
  }
}
