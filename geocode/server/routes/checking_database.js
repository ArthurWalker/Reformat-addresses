var sql = require("mssql");

var checking_database = function(req,res,config){
    var list_address = [["BUILDING_ID","FULL_ADDRESS"]];
    sql.connect(config, function (err) {
        if (err) {
            console.log(err);
        }
        // create request object
        var request = new sql.Request();
        // query (MPRN address) to the database and get the records
        var query = 'select top 100 *  FROM [GeoDirectory].[dbo].[NewGeoRecord]';

        request.query(query, function (err, result) {
            if (err) { console.log(err); }
            else {
                console.log("");
                console.log("Testing new database");
                res.send(result.recordset);
                result.recordset.forEach(element => {
                    // Join fields together and remove Eircode
                    var join_remove = require('../functions_CHECKING_DATABASE/join_remove');
                    list_address.push(join_remove(element));
                });
                console.log(list_address);
            }
            sql.close();
        });
    });
};

module.exports = checking_database;