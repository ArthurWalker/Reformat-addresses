var express = require('express');
var app = express();
var http = require('http');

app.get('/', function (req, res) {

    var sql = require("mssql");
    var run_count=0;
    var all_addresses = "";
    var list_results = [["Original Addresses", "Formated Addresses"]]; // create columns
    var dict_results={};
    var dict_counties = require('./dict_counties');     //Create list of different county
 

    // config your database
    var config = {
        user: 'OpenDataLogin',
        password: 'zHbF6cK8gzkCR6yKAnMF',
        server: '172.17.0.237',
        database: 'OPEN_DATA'
    };

    // connect to your database
    sql.connect(config, function (err) {
        if (err) {
            console.log(err);
        }
        // create request object
        var request = new sql.Request();
        // query (MPRN address) to the database and get the records
        var query = 'select MPRN_Address from TD_MPRN_GUID_LINK';

        request.query(query, function (err, result) {
            if (err) { console.log(err); }
            else {
                //res.send(result.recordset);
                run_count+=1;
                console.log("===========> Nums of running times: "+run_count);
                console.log(req.url);
                console.log("===========> Executing each address...")
                result.recordset.forEach(address => {
                    executeEachAddres(address.MPRN_Address);
                });

                // Statistic purpose:
                // Count occurences with an array format including sortable which is word_occurences[0]) and dictionary which is word_occurences[1])
                console.log("===========> Counting...");
                var count_unique_part = require('./functions/count_unique_part');
                var word_occurences = count_unique_part(all_addresses);

                // Summary data
                console.log("===========> Summary...");
                var summary = require('./functions/summary');
                // table 1: nums of ouccrences with incremental id: 
                var occurences_table_with_num = summary(word_occurences[0])[0];
                // table 2: the length of words:  occurences_table_with_length_word
                var occurences_table_with_length_word = summary(word_occurences[0])[1];
                
                // Compare unique parts with addresses
                const data1 = occurences_table_with_num;
                const data2 = occurences_table_with_length_word;
                console.log("===========> Comparing...");
                var uni_occu = require('./functions/uni_occ');
                uni_occu(dict_results,data1);

                //Make CVS file and downloadx
                console.log("===========> Making CSV...");
                var toCSV = require('./functions/toCSV');
                toCSV(list_results, null); //Put formated addresses into file
                //res.send(JSON.stringify(data2));
                
                console.log("===========> Finished !");
            }
            sql.close();
        });
    });

    // Perform with each address
    var format_address = require('./functions/format_address');
    var lookFor = require('./functions/lookFor');
    var new_address;
    var executeEachAddres = function (address) {
        new_address = format_address(address); // to execute each address
        list_results.push([address, new_address]); // list of resukts -> to put into files to download
        dict_results[address]=new_address;  // dictionary of results
        all_addresses += new_address + " "; // to find unique address
        //lookFor("   => ", new_address);
    }
});

var server = app.listen(5000, function () {
    console.log('Node.js web server at port 5000 is running ...');
});

