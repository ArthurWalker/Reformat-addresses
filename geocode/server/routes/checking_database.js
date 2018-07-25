var sql = require("mssql");
const readline = require('readline');
var config = require('../database');

var checking_database = function (req, res) {

    new sql.ConnectionPool(config.configGeoDirectory).connect().then(pool => {
        var query = 'select top 10 [BUILDING_ID],[ADDRESS_POINT_ID],[ADDRESS_LINE],[SMALL_AREA_REF],[LATITUDE],[LONGITUDE],[EIRCODE] FROM [GeoDirectory].[dbo].[NewGeoRecord]';
        return pool.request().query(query)
    }).then(result => {
        console.log("===============> Executing each address");
        // Progress Bar
        var progress_count = 0;
        result.recordset.forEach(element => {
            // Join fields together and remove Eircode and write to CSV file
            var join_remove = require('../functions_CHECKING_DATABASE/join_remove');
            //var toCSV = require('../functions_CHECKING_DATABASE/toCSV');
            var new_address_list = join_remove(element);
            //toCSV(join_remove(new_address_list)); // but cant convert all database.

            // Write into table in database
            var insert_table = require('../functions_CHECKING_DATABASE/insert_table');
            insert_table(new_address_list);

            // Show progress
            progress_count += 1;
            readline.clearLine(process.stdout, 0);
            readline.cursorTo(process.stdout, 0);
            process.stdout.write(progress_count + "/" + 2202126 + "   ==> " + Number(progress_count / 2202126 * 100).toFixed(2) + "%");
        });
        console.log("\n===============>Done executing addresses and inserting into database");
        res.send("Done executing addresses and inserting into database");
        sql.close();
    }).catch(err => {
        console.log("Error while doing selecting from database"+err)
        sql.close();
    });

    // sql.connect(config.configGeoDirectory, function (err) {
    //     if (err) {
    //         console.log("There is a database connection error -> " + err);
    //         res.send(err);
    //     }
    //     else {
    //         var request = new sql.Request();
    //         // query (MPRN address) to the database and get the records
    //         var query = 'select top 10 [BUILDING_ID],[ADDRESS_POINT_ID],[ADDR_LINE_1],[ADDR_LINE_2],[ADDR_LINE_3],[ADDR_LINE_4],[ADDR_LINE_5],[ADDR_LINE_6],[ADDR_LINE_7],[ADDR_LINE_8],[ADDR_LINE_9],[ADDR_LINE_10],[SMALL_AREA_REF],[LATITUDE],[LONGITUDE],[EIRCODE] FROM [GeoDirectory].[dbo].[NewGeoRecord]';
    //         console.log("===============> Executing queries");
    //         request.query(query, function (err, result) {
    //             if (err) {
    //                 console.log("Error while querying database -> " + err);
    //                 res.send(err);
    //             }
    //             else {
    //                 console.log("===============> Executing each address");
    //                 // Progress Bar
    //                 var progress_count = 0;
    //                 result.recordset.forEach(element => {
    //                     // Join fields together and remove Eircode and write to CSV file
    //                     var join_remove = require('../functions_CHECKING_DATABASE/join_remove');
    //                     var toCSV = require('../functions_CHECKING_DATABASE/toCSV');
    //                     var new_address_list = join_remove(element);
    //                     //toCSV(join_remove(new_address_list)); // but cant convert all database.

    //                     // Write into table in database
    //                     var insert_table= require('../functions_CHECKING_DATABASE/insert_table');
    //                     //insert_table(new_address_list);

    //                     // Show progress
    //                     progress_count += 1;
    //                     readline.clearLine(process.stdout, 0);
    //                     readline.cursorTo(process.stdout, 0);
    //                     process.stdout.write(progress_count + "/" + 2202126 + "   ==> " + Number(progress_count / 2202126 * 100).toFixed(2) + "%");
    //                 });
    //                 console.log("\n===============>Done executing addresses and inserting into database");
    //                 res.send("Done executing addresses and inserting into database");
    //             }
    //             sql.close();
    //         });
    //     }
    // });
};

module.exports = checking_database;