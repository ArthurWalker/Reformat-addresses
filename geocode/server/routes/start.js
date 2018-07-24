var express = require('express');
var router = express.Router();

// config your database
var config = require('../database');
var main_function=require('./main_function');
var checking_database=require('./checking_database');
// req: it is the url
// res: the function tells express what to send back to the person making the request

// Home page route.
router.get('/', function (req, res) {
    // Go to views/index.pug
    //res.render('index', { title: 'Hey', message: 'Hello there!' })
    main_function(req, res,config.configOPEN_DATA);
})

// About page route.
router.get('/check', function (req, res) {
    checking_database(req, res,config.configGeoDirectory);
})



module.exports = router;