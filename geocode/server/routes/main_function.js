var sql = require("mssql");
var config = require('../database');
var readline = require('readline');

// CHecking numbers of rows in the databse
var show_rows = require('../functions_MAIN_FUNCTION/show_rows');
var total_rows = show_rows();

var main_function = function (req, res) {
    var all_addresses = "";
    //var list_results = [["MPRN","Original Addresses", "Formated Addresses"]]; // create columns
    var list_results = [];
    var dict_results = {};
    //var dict_counties = require('./dict_counties');     //Create list of different county

    // connect to your database
    sql.connect(config.configOPEN_DATA, function (err) {
        if (err) {
            console.log(err);
        }
        // create request object
        var request = new sql.Request();
        // query (MPRN address) to the database and get the records
        var query = 'select MPRN, MPRN_Address from TD_MPRN_GUID_LINK';
        var progress_count = 0;
        request.query(query, function (err, result) {
            if (err) { console.log(err); }
            else {
                //res.send(result.recordset);
                //console.log(req.url);
                console.log("===========> Executing each address...")
                result.recordset.forEach(address => {
                    executeEachAddres(address.MPRN, address.MPRN_Address);
                    // Show progression
                    readline.clearLine(process.stdout, 0);
                    readline.cursorTo(process.stdout, 0);
                    progress_count += 1;
                    process.stdout.write(progress_count + "/" + total_rows + "   ==> " + Number(total_rows / 907088 * 100).toFixed(2) + "%\n");
                });

                // Statistic purpose:
                // Count occurences with an array format including sortable which is word_occurences[0]) and dictionary which is word_occurences[1])
                console.log("===========> Counting...");
                var count_unique_part = require('../functions_MAIN_FUNCTION/count_unique_part');
                var word_occurences = count_unique_part(all_addresses);

                // Summary data
                console.log("===========> Summary...");
                var summary = require('../functions_MAIN_FUNCTION/summary');
                // table 1: nums of ouccrences with incremental id: 
                var occurences_table_with_num = summary(word_occurences[0])[0];
                // table 2: the length of words:  occurences_table_with_length_word
                var occurences_table_with_length_word = summary(word_occurences[0])[1];

                // Compare unique parts with addresses
                const data1 = occurences_table_with_num;
                const data2 = occurences_table_with_length_word;
                console.log("===========> Comparing...");
                var uni_occu = require('../functions_MAIN_FUNCTION/uni_occ');
                uni_occu(dict_results, data1);

                //Make CVS file and downloadx
                console.log("===========> Making CSV...");
                var toCSV = require('../functions_MAIN_FUNCTION/toCSV');
                //toCSV(list_results, null); //Put formated addresses into file

                res.send("Done executing MPRN addresses");

                console.log("===========> Finished !");
            }
            sql.close();
        });
    });

    // Perform with each address
    var format_address = require('../functions_MAIN_FUNCTION/format_address');
    var lookFor = require('../functions_MAIN_FUNCTION/lookFor');
    var new_address;
    var executeEachAddres = function (MPRN, address) {
        new_address = format_address(address); // to execute each address
        list_results.push([MPRN, address, new_address]); // list of resukts -> to put into files to download
        dict_results[address] = new_address;  // dictionary of results
        all_addresses += new_address + " "; // to find unique address
        // Create Table in database
        var insert_table = require('../functions_MAIN_FUNCTION/insert_table')
        insert_table([MPRN, address, new_address]);
        //lookFor("   => ", new_address);
    }
};

module.exports = main_function;