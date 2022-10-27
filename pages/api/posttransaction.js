const https = require("https");
const PaytmChecksum = require("paytmchecksum");

export default async function handler(req, res) {
  console.log("recived during verification: ", req.body);
  if (req.method === "POST") {
    var paytmParams = {};

    paytmParams.body = {
      mid: process.env.PAYTM_MID,
      orderId: req.body.ORDERID,
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
          // hostname: "securegw-stage.paytm.in",

          /* for Production */
          hostname: 'securegw.paytm.in',

          port: 443,
          path: "/v3/order/status",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        // Set up the request
        var response = "";
        var post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            response += chunk;
          });

          post_res.on("end", function () {
            resolve(response);
          });
        });

        // post the data
        post_req.write(post_data);
        post_req.end();
      });
    };
    let myResp = await requestAsync();

    console.log("After verification: ", {
      data: req.body.data,
      txnRsp: req.body.txnRsp,
      vfyRsp: myResp,
      stats: "Verified",
    });
    res.status(200).json({
      data: req.body.data,
      txnRsp: req.body.txnRsp,
      vfyRsp: myResp,
      stats: "Verified",
    });
  }
}
