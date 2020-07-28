var express = require('express');
var router = express.Router();
var controller = require('../Controller/auth.controller');

router.get('/login', controller.login);

router.post('/login', controller.postLogin);

module.exports = router;