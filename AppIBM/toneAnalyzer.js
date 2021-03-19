var bodyParser = require('body-parser')
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const url = process.env.URL;
const api_key = process.env.API_KEY;
var jsonParser = bodyParser.json()

const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey: api_key,
  }),
  serviceUrl: url,
});

app.use(bodyParser.urlencoded({extended:true}));

app.get('/autor', (req, res) => {
    res.send({ alumno: "AACA", servicio: "Cloud foundry en IBM Cloud"})
});

app.get('/', (req, res) => {
    res.send({ default: "Añade /autor a la ruta"})
});

app.post('/analyze', jsonParser, (req, res) => {
    console.log("Hey");
    let receivedText = req.body.receivedText;
    console.log(receivedText);
    const toneParams = {
        toneInput: {
            'text': receivedText
        },
        contentType: 'application/json',
    };
  
    toneAnalyzer.tone(toneParams)
        .then(toneAnalysis => {
            analyzedText = JSON.stringify(toneAnalysis.result);
            console.log(analyzedText);
            res.json(analyzedText);
        })
        .catch(err => {
            console.log('error:', err);
            res.send(err);
        });
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});