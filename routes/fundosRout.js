var express = require('express');

var router = express.Router();

var fmodel = require('../models/fundos');
 
// req ajuda a pegar informações do link
// res resposta que o pedido me vai dar
// next 

// parecido com getMapping
router.get('/', async function (req, res, next){

    console.log('sending all foundes...');

    let object = await fmodel.getAllfundos();

    res.status(object.status).send(object.result);

});

// parecido com request mapping
router.get('/:id', async function (req, res, next){

    let id = req.params.id;

    console.log(`sending found by ${id}...`);

    let object = await fmodel.getFundoById(id);

    res.status(object.status).send(object.result);

});

module.exports = router;
