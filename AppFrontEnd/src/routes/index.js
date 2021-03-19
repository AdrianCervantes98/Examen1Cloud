const router = require('express').Router();

const helloRoute = require('./hello');

router.use('/hello', helloRoute);

router.get('/autor', (req, res) => {
    res.send({ alumno: "AACA", servicio: "EKS en AWS"})
});

router.post('/analyze', (req, res) => {
    export const input = req.body.inputText;
    console.log(input);
});

module.exports = router;