var fs = require('fs');
var parse = require('csv-parse');
var readline = require('readline');

var progress_count_OpenData = 0;
//read from csv
var opendata = function (req, res) {
    fs.createReadStream('../../OpenData.csv')
        .pipe(parse({ delimiter: ',' }))
        .on('data', function (row) {
            //do something with csvrow
            var executeEachAddress = require('../../functions_MAIN_FUNCTION/executeEachAddress');
            progress_count_OpenData += 1;
            // row[0]:mprn
            // row[2]:mprn address
            var new_address = executeEachAddress(row[0], row[2]);
            readline.clearLine(process.stdout, 0);
            readline.cursorTo(process.stdout, 0);
            process.stdout.write(progress_count_OpenData + "/" + 908028 + "   ==> " + Number(progress_count_OpenData / 908028 * 100).toFixed(2) + "%");
        })
        .on('end', function () {
            //do something wiht csvData
            var toCSV = require('../../functions_MAIN_FUNCTION/toCSV');
            var dup_list = require('../../globalVariable/dup_list');
            toCSV(dup_list.dup_list1_5, 'address_1_5');
            toCSV(dup_list.dup_list2_0, 'address_2_0');
            var dict_counties = require('../../globalVariable/dict_counties');
            toCSV([dict_counties['UNDEFINED']], 'undefined');
            // var dict_opendata = require('../../globalVariable/dict_counties');
            // var data = JSON.stringify(dict_opendata);
            // fs.writeFileSync('opendata.json',data);
            console.log('Done');
        })
}

module.exports = opendata;