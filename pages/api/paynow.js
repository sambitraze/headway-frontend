import https from "https";
import PaytmConfig from "../../components/Paytm/config";
import PaytmChecksum from "../../components/Paytm/Checksum.js";

export default async function paynow(req, res) {

  if (req.method === "POST") {
    console.log("flag0");
    var reqBody = JSON.parse(req.body);
    var orderId = "RSGI" + Math.floor(Math.random(6) * 1000000);
    var amount = 10000;
    var callbackUrl = "http://localhost:3000/api/paymentCallback"
    var userInfo = {
      custId: reqBody.custId, // CLIENT CUSTOMER ID
      mobile: reqBody.mobile,
      email: reqBody.email
    };

    const paytmParams = {};

    paytmParams.body = {
      requestType: "Payment",
      mid: PaytmConfig.PaytmConfig.mid,
      websiteName: PaytmConfig.PaytmConfig.website,
      orderId: orderId,
      callbackUrl: callbackUrl,
      txnAmount: {
        value: "1.00",
        currency: "INR",
      },
      userInfo: userInfo,
    };
    // console.log(paytmParams.body);

    PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      PaytmConfig.PaytmConfig.key
    ).then(function (checksum) {
      paytmParams.head = {
        signature: checksum,
      };

      var post_data = JSON.stringify(paytmParams);
      //   console.log(post_data);
      console.log(PaytmConfig.PaytmConfig.mid);
      console.log(orderId);

      var options = {
        /* for Staging */
        hostname: "securegw-stage.paytm.in",

        /* for Production */
        // hostname: 'securegw.paytm.in',

        port: 443,
        path: `/theia/api/v1/initiateTransaction?mid=${PaytmConfig.PaytmConfig.mid}&orderId=${orderId}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": post_data.length,
        },
      };

      var response = "";
      var post_req = https.request(options, function (post_res) {
        console.log("flag1")
        post_res.on("data", function (chunk) {

          console.log("flag2")
          response += chunk;
        });
        console.log("flag3")

        post_res.on("end", function () {
          console.log("flag4")
          response = JSON.parse(response);
          console.log("txnToken:", response);

          console.log("flag5")

          res.send(JSON.stringify({ mid: PaytmConfig.PaytmConfig.mid, orderId: orderId, token: response.body.txnToken }));

          console.log("flag6")

        });
      });

      console.log("flag7");
      post_req.write(post_data);

      console.log("flag8");
      post_req.end();

      console.log("flag9")
    });
  } else {

    console.log("flag10");
    res.send(req.body);
  }

}