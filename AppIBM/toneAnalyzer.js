require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const url = process.env.URL;
const api_key = process.env.API_KEY;

const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey: api_key,
  }),
  serviceUrl: url,
});

app.get('/autor', (req, res) => {
    res.send({ alumno: "AACA", servicio: "Cloud foundry en IBM Cloud"})
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})