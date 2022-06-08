var express = require('express');

var router = express.Router();

var umodel = require('../models/user');
 
// req ajuda a pegar informações do link
// res resposta que o pedido me vai dar
// next 

// parecido com getMapping
router.get('/', async function (req, res, next){

    console.log('sending all users...');

    let object = await umodel.getAllUsers();

    res.status(object.status).send(object.result);

});

router.post('/new', async function (req, res, next){

    console.log('Adicionando novo user...');

    let user = req.body;

    let result = await umodel.newUser(user);

    res.status(result.status).send(result.result);
    console.log(result.result.rows);

});

router.post("/login", async function (req, res, next) {
    let user = req.body;

    let result = await umodel.loginUser(user);

    res.status(result.status).send(result.result);
});

router.get('/:id', async function (req, res, next){

    let id = req.params.id;

    console.log(`Sending user by id : ${id}`);

    let object = await umodel.getUserById(id);

    res.status(object.status).send(object.result);

});

router.get('/foundby/:apelido', async function(req, res, next){


    let apelido = req.params.apelido;

    console.log(`Sending user explicador by apelido: ${apelido}`);

    let object = await umodel.getUserByName(apelido);

    res.status(object.status).send(object.result);
});

router.get('/moradaUser/:id', async function(req, res, next){

    let uid = req.params.id;

    console.log('sending morada and user by user id: '+ uid);

    let object = await umodel.getUserMorada(uid);

    res.status(object.status).send(object.result);
});

router.get('/getExplicadores', async function (req, res, next){

    console.log('sending all explicadores...');

    let object = await umodel.getExp();

    res.status(object.status).send(object.result);

});

module.exports = router;