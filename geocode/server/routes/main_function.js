var { poolPromise } = require('../database');
var readline = require('readline');

var main_function = async function (req, res) {
    try {
        //var list_results = [["MPRN","Original Addresses", "Formated Addresses"]]; // create columns
        // CHecking numbers of rows in the databse
        // var show_rows = require('../functions_MAIN_FUNCTION/show_rows');
        // var total_rows = show_rows();
        //var dict_counties = require('./dict_counties');     //Create list of different county
        var list_results = [];
        var dict_results = {};
        var all_addresses = "";
        let pool = await poolPromise;

        // connect to your database;
        // create request object
        let request = await pool.request();
        request.stream = true; // large data
        // query (MPRN address) to the database and get the records
        var query = 'select MPRN,MPRN_Address from [TD_MPRN_GUID_LINK]';
        request.query(query);

        // Print out COLUMNS
        // request.on('recordset', columns => {
        //     console.log(columns);
        // });
        console.log("===========> Executing each address...")

        // Executing each row
        var progress_count = 0;
        request.on('row', (row) => {
            var executeEachAddress = require('../functions_MAIN_FUNCTION/executeEachAddress');
            var new_address = executeEachAddress(row.MPRN,row.MPRN_Address);
            list_results.push([row.MPRN, row.MPRN_Address, new_address]); // list of resukts -> to put into files to download
            dict_results[row.MPRN_Address] = new_address;  // dictionary of results
            all_addresses += new_address + " "; // to find unique address
            // Show progression
            readline.clearLine(process.stdout, 0);
            readline.cursorTo(process.stdout, 0);
            progress_count += 1;
            process.stdout.write(progress_count + "/" + 908828 + "   ==> " + Number(progress_count / 908828 * 100).toFixed(2) + "%");
        })
        // Executing error
        request.on('error', err => {
            // May be emitted multiple times
            console.log('error');
        });

        request.on('done', result => {
            // Always emitted as the last one
            res.send("Done executing MPRN addresses");
            // Statistic purpose:
            var making_statistic = require('../functions_MAIN_FUNCTION/making_statistic');
            //making_statistic(all_addresses, dict_results, list_results);
            var dict_counties = require('../dict_counties');
            // var toCSV = require('../functions_MAIN_FUNCTION/toCSV');
            // toCSV([dict_counties['UNDEFINDED']]);
            console.log("===========> Finished !");
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = main_function;