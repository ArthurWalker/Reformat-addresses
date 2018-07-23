var sql = require("mssql");

var checking_database = function(req,res,config){
    
    sql.connect(config, function (err) {
        if (err) {
            console.log(err);
        }
        // create request object
        var request = new sql.Request();
        // query (MPRN address) to the database and get the records
        var query = 'select top 100 ADDRESS_POINT_ID from ADDRESS_POINTS';

        request.query(query, function (err, result) {
            if (err) { console.log(err); }
            else {
                res.send(result.recordset);
            }
            sql.close();
        });
    });
};

module.exports = checking_database;