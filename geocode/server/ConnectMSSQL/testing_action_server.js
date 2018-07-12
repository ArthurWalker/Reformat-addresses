var express = require('express');
var app = express();
var http = require('http');

app.get('/',function(req,res) {
    var sql = require("mssql");

    var all_addresses= "";
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
        var query = 'select  MPRN_Address from TD_MPRN_GUID_LINK';
        request.query(query, function (err,result) {
            if (err) {console.log(err);}
            else{
                //res.send(result.recordset);
                result.recordset.forEach(address => {
                    executeEachAddres(address.MPRN_Address);
                });
                word_occurences=count_unique_part(all_addresses);
                res.send(word_occurences);
            }
            sql.close();
        });
    });

    var format_address =require('./action/format_address');
    var count_unique_part=require('./action/count_unique_part');

    var executeEachAddres = function(address){
        address=format_address(address);
        all_addresses+=address+ " ";
    }
});

var server = app.listen(5000,function () {
    console.log('Node.js web server at port 5000 is running ...');
});

