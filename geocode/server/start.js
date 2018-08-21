var express = require('express');
var router = express.Router();

var main_function=require('./routes/withDatabase/main_function');
var matching_address = require('./routes/withDatabase/matching_address');
var checking_match = require('./routes/withDatabase/checking_match');
var opendata = require('./routes/withoutDatabase/opendata');
var geodata = require('./routes/withoutDatabase/geodata');
var compare_without_db = require('./routes/withoutDatabase/compare_without_db');
// req: it is the url
// res: the function tells express what to send back to the person making the request

// Home page route.
router.get('/',function(req,res){
    res.json({'Message':'Server is live'});
})


router.get('/main', function (req, res) {
    // Go to views/index.pug
    //res.render('index', { title: 'Hey', message: 'Hello there!' })
    main_function(req, res);
})

// Matching address route.
router.get('/match', function (req, res) {
    res.send('Matching addresses');
    matching_address(req,res);
})

// Checking match route.
router.get('/checking_match', function (req, res) {
    res.send('Checking match');
    checking_match(req,res);
})


// Without database.
router.get('/opendata', function (req, res) {
    res.send('Checking opendata');
    opendata(req,res);
})

// Without database
router.get('/geodata', function (req, res) {
    res.send('Checking geodata');
    geodata(req,res);
})

// Without database
router.get('/compare', function (req, res) {
    res.send('Checking geodata');
    compare_without_db(req,res);
})

module.exports = router;