const express = require('express');
const router = express.Router();
// config your database
var main_function=require('./main_function');
var checking_database=require('./checking_database');
var match_database= require('./match_database');
// req: it is the url
// res: the function tells express what to send back to the person making the request

// Home page route.
router.get('/main', function (req, res) {
    // Go to views/index.pug
    //res.render('index', { title: 'Hey', message: 'Hello there!' })
    main_function(req, res);
})

// About page route.
router.get('/check', function (req, res) {
    checking_database(req, res);
})

router.get('/match', function (req, res) {
    match_database(req, res);
})



module.exports = router;