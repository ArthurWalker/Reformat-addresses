var sql = require("mssql");
var config = require('../database');
var readline = require('readline');

var main_function = function (req, res) {
    //var list_results = [["MPRN","Original Addresses", "Formated Addresses"]]; // create columns
    var list_results = [];
    var dict_results = {};
    var all_addresses = "";
    // CHecking numbers of rows in the databse
    // var show_rows = require('../functions_MAIN_FUNCTION/show_rows');
    // var total_rows = show_rows();
    //var dict_counties = require('./dict_counties');     //Create list of different county

    // connect to your database
    sql.connect(config.configOPEN_DATA, function (err) {
        if (err) {
            console.log(err);
        }
        // create request object
        var request = new sql.Request();
        // query (MPRN address) to the database and get the records
        var query = 'select top 100 MPRN, MPRN_Address from TD_MPRN_GUID_LINK';
        var progress_count = 0;
        request.query(query, function (err, result) {
            if (err) { console.log(err); }
            else {
                //res.send(result.recordset);
                //console.log(req.url);
                console.log("===========> Executing each address...")
                result.recordset.forEach(address => {
                    var executeEachAddress= require('../functions_MAIN_FUNCTION/executeEachAddress');
                    list_results,dict_results,all_addresses=executeEachAddress(list_results,dict_results,all_addresses,address.MPRN, address.MPRN_Address);
                    // Show progression
                    readline.clearLine(process.stdout, 0);
                    readline.cursorTo(process.stdout, 0);
                    progress_count += 1;
                    process.stdout.write(progress_count + "/" + 907769 + "   ==> " + Number(progress_count / 907769 * 100).toFixed(2) + "%\n");
                });

                // Statistic purpose:
                var making_statistic=require('../functions_MAIN_FUNCTION/making_statistic');
                //making_statistic(all_addresses,dict_results,list_results);
 
                res.send("Done executing MPRN addresses");

                console.log("===========> Finished !");
            }
            sql.close();
        });
    });

};

module.exports = main_function;