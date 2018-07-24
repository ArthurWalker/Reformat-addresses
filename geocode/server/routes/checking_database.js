var sql = require("mssql");

//var list_address = [["BUILDING_ID","FULL_ADDRESS"]];
var list_address = [];
var checking_database = function (req, res, config) {

    sql.connect(config, function (err) {
        if (err) {
            console.log(err);
        }
        // create request object
        var request = new sql.Request();
        // query (MPRN address) to the database and get the records
        var query = 'select top 500000 * FROM [GeoDirectory].[dbo].[NewGeoRecord]';
        console.log("Executing queries");
        request.query(query, function (err, result) {
            if (err) { console.log(err); }
            else {
                console.log("===============> Testing new database");
                result.recordset.forEach(element => {
                    // Join fields together and remove Eircode
                    var join_remove = require('../functions_CHECKING_DATABASE/join_remove');
                    list_address.push(join_remove(element));
                });
                console.log(list_address);
                res.send("Done executing addresses");
            }
            sql.close();
        });
    });
};

module.exports = checking_database;
module.exports.list_address = list_address;