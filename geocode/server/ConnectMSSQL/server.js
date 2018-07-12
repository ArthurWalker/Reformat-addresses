var express = require('express');
var app = express();
var http = require('http');

// creating server
var server = http.createServer(function (req,res){
    if (req.url =='/'){
        // check the URL of the current request
        // set resonse header
        res.writeHead(200,{'Content-Type':'text/html'});
        // set response content
        res.write('<html><body><p>This is the homepage </p></body></html>');
        res.end();
    }else {
        res.end('Invalid Request');
    }
})


app.get('/',function(req,res) {
    var sql = require("mssql");

    // config your database
    var config = {
        user:'OpenDataLogin',
        password: 'zHbF6cK8gzkCR6yKAnMF',
        server:'172.17.0.237',
        database:'OPEN_DATA'
    };

    // connect to your database
    sql.connect(config,function(err) {
        if (err) {
            console.log(err);}
    
        // create request object
        var request = new sql.Request();

        // query (MPRN address) to the database and get the records
        var query = 'select MPRN_Address from TD_MPRN_GUID_LINK';
        request.query(query, function (err,result) {
            if (err) {console.log(err);}
            else{
                res.send(result.recordset);
                console.log(result.recordset);
            }
            sql.close();
        });

    });
});

var server = app.listen(5000,function () {
    console.log('Node.js web server at port 5000 is running ...');
});
