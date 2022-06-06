var express = require('express');

var router = express.Router();

var hmodel = require('../models/homeServices');

router.get('/explicadores', async function (req, res, next){

    console.log('sending all explicadores...');

    let object = await hmodel.getExpInfo();

    res.status(object.status).send(object.result);

});

module.exports = router;