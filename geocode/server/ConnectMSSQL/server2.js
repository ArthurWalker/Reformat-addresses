// A data access middle-ware that executes queries on database and fetches results

// express4-tedious enables you to execute SQL queries using Tedious SQL server package

// mongodb is used to interact with database

const express =require('express');

const app = express();

const MongoCLient= require('mongodb').MongoCLient;
const bodyParse = require('body-parser');


var config = {  
    user:'OpenDataLogin',
    password: 'zHbF6cK8gzkCR6yKAnMF',
    server:'172.17.0.237',
    database:'OPEN_DATA' 
};

//var sql = require('mssql');

const port = 5000;

app.use(bodyParse.urlencoded({extended:true}));

require('../routes') (app, {});


app.listen(port, function() {
    console.log('We are live on '+port);
});