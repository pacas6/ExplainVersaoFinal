var express = require('express');

var router = express.Router();

var Dmodel = require('../models/dashboard');

router.get('/dashValues', async function(req, res, next){

    console.log('sending users count...');

    let array = await Dmodel.getUsersCount();

    res.status(array.status).send(array.result);

});


router.get('/disciplinas', async function(req, res, next){

    console.log('sending all curricular unities...');

    let array = await Dmodel.getAllDisciplinas();

    res.status(array.status).send(array.result);

});

router.get('/rank/:id' ,async function(req, res, next){

    let id = req.params.id;
    console.log('sending Rank by user id: '+id);

    let object = await Dmodel.getRankByUserId(id);

    res.status(object.status).send(object.result);

});

router.post('/newAnounce', async function(req, res, next){

    console.log('Adicionando novo anuncio...');

    let anounce = req.body;

    let result = await Dmodel.newAnouce(anounce);

    res.status(result.status).send(result.result);
    
    console.log(result.result.rows);

});

module.exports = router;
