export default function paynow(req, res) {
    console.log("Callback Type: ",req.method);
    console.log("Callback: ",req.body);
    if(req.method==="POST"){
        res.send(req.body);
    }
    else{
        res.send("NO")
    }
}