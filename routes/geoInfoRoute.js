var express = require('express');

var router = express.Router();

var gmodel = require('../models/geoInfo');

router.post('/postGeoCoord', async function(req, res, next){

    console.log('adicionando novas coordenadas...');

    let coord = req.body;

    let result = await gmodel.postGeoInfo(coord);

    res.status(result.status).send(result.result);

});

router.get('/getExGeoData', async function(req, res, next){

    console.log('Enviando localização geografica dos explicadores...');

    let object = await gmodel.getExpGeoCords();

    res.status(object.status).send(object.result);

});

router.get('/getExGeoDataById/:id', async function(req, res, next){

    let id = req.params.id;

    console.log('Enviando localização geografica do explicador: '+ id);

    let object = await gmodel.getExpGeoCordsById(id);

    res.status(object.status).send(object.result);
});

router.get('/getAllCountrys', async function(req, res, next){

    console.log('enviando todos os paises...');

    let object = await gmodel.getAllCountrys();

    res.status(object.status).send(object.result)

});

module.exports = router;