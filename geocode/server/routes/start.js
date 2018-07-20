var express = require('express');
var router = express.Router();

// config your database
var config = require('../database');
var main_function=require('./main_function');

// req: it is the url
// res: the function tells express what to send back to the person making the request

// Home page route.
router.get('/', function (req, res) {
    // Go to views/index.pug
    //res.render('index', { title: 'Hey', message: 'Hello there!' })
    main_function(req, res, config);
})

// About page route.
router.get('/about', function (req, res) {
    res.send('About this wiki');
})



module.exports = router;