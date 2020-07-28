var express = require('express');
var router = express.Router();
var db = require('../db');
var shortid = require('shortid');
var controller = require('../Controller/user.controller');
var validate = require('../validate/user.validate.js');
var authMiddleware = require('../middlewares/auth.middleware');

router.get('/', controller.index);

router.get('/search', controller.search);


router.get('/create', controller.create);

router.get('/:id', controller.get);


router.post('/create', validate.postCreate, controller.postCreate);


module.exports = router;