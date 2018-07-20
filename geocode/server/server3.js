// A data access middle-ware that executes queries on database and fetches results

// express4-tedious enables you to execute SQL queries using Tedious SQL server package

// mongodb is used to interact with database

// Initialize node modules
const express =require('express'); // Web framework

const app = express();

var sql = require('mssql'); // MS SQL Server client

var bodyParse = require('body-parser');

var axios =require('axios');

// Body Parse Middleware and configure Express
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());
//app.use('/api',router);
//var router = express.Router();


//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });


// Setting up server
const port = 5000;
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('We are live on http://%s:%s',host,port);
});


// Initiallising connection string
var sqlConfig = {  
    user:'OpenDataLogin',
    password: 'zHbF6cK8gzkCR6yKAnMF',
    server:'172.17.0.237',
    database:'OPEN_DATA' 
};

// function to connect to databse and execute query
var result = [];
var query = "select MPRN_Address from TD_MPRN_GUID_LINK ";
    
var executeQuery = function(res,query){
    sql.connect(sqlConfig,function (err) {
        if (err) {
            console.log("Error while connecting database :-" + err);
            res.send(err);
        }
        else{
            // create Request object
            var request = new sql.Request();
            // query to the database
            request.query(query, function(err,rs){
                if (err){
                    console.log("Error while querying database :-"+err);
                    res.send(err);
                }
                else{
                    console.log(rs.recordset);
                    //res.send(rs.recordset);
                    //result = rs.recordset;
                }
            });
        }
    });
}

//require('../routes') (app, {});

// Get API
app.get("/MPRN_Address",function(req,res){
    var query = "select MPRN_Address from TD_MPRN_GUID_LINK ";
    executeQuery(res,query);
    //console.log(result);
});