var express = require('express');
var app = express();


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

        // query to the database and get the records
        var query = 'select top 10 MPRN_Address from TD_MPRN_GUID_LINK';
        request.query(query, function (err,result) {
            if (err) {console.log(err);}
            else{
                res.send(result.recordset[5].MPRN_Address);
                console.log(result.recordset[5].MPRN_Address);
            }
            sql.close();
        });

    });
});

var server = app.listen(5000,function () {
    console.log('Node.js web server at port 5000 is running ...');
});
