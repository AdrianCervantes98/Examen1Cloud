const router = require('express').Router();
const https = require('https');
const axios = require('axios');

const helloRoute = require('./hello');

router.use('/hello', helloRoute);

router.get('/autor', (req, res) => {
    res.send({ alumno: "AACA", servicio: "EKS en AWS"})
});

//https://appibm.us-south.cf.appdomain.cloud/analyze

router.post('/analyze', (req, res) => {
    //const input = req.body.inputText;
    const input = JSON.stringify({
        receivedText: req.body.inputText,
    })
    console.log(input)
    let result = doRequest(input);
    result.then(function(response){
        console.log(response)
    })
});

async function doRequest(payload) {
    console.log("entré a la func");
    let res = await axios.post("https://appibm.us-south.cf.appdomain.cloud/analyze", payload);
    return res.data;
}



module.exports = router;