var sql = require("mssql");
const readline = require('readline');
var config = require('../database');

var checking_database = function (req, res) {
    new sql.ConnectionPool(config.configOPEN_DATA).connect().then(pool => {
        var query = "select BUILDING_ID,ADDRESS_POINT_ID,concat(ADDR_LINE_1,' ',[ADDR_LINE_2],' ',[ADDR_LINE_3],' ',[ADDR_LINE_4],' ',[ADDR_LINE_5],' ',[ADDR_LINE_6],' ',[ADDR_LINE_7],' ',[ADDR_LINE_8],' ',[ADDR_LINE_9],' ',[ADDR_LINE_10]) as ADDRESS_LINE from [GeoDirectory].[dbo].[NewGeoRecord]";
        return pool.request().query(query)
    }).then(result => {
        console.log("===============> Executing each address");
        // Progress Bar
        var progress_count = 0;
        result.recordset.forEach(element => {
            // Join fields together and remove Eircode and write to CSV file
            var join_remove = require('../functions_CHECKING_DATABASE/join_remove');
            //var toCSV = require('../functions_CHECKING_DATABASE/toCSV');
            //var new_address_list = join_remove(element);
            //toCSV(join_remove(new_address_list)); // but cant convert all database.

            // Write into table in database
            //var insert_table = require('../functions_CHECKING_DATABASE/insert_table');
            //insert_table(element);
            //console.log(element);
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

};

sql.on('error',err =>{
    console.log(err);
})

module.exports = checking_database;