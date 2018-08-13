var fs = require('fs');
var parse = require('csv-parse');
var readline = require('readline');
var list_MPRN = require('../../globalVariable/list_MPRN_result');
var addresss_not_E = require('../../globalVariable/address_not_English');
var progress_count_OpenData = 0;
var count = 0;
//read from csv
var opendata = function (req, res) {

    fs.createReadStream('../../OpenData.csv').pipe(parse({ delimiter: ',' }))
        .on('data', function (row) {
            //do something with csvrow
            var executeEachAddress = require('../../functions_MAIN_FUNCTION/executeEachAddress');
            progress_count_OpenData += 1;
            // row[0]:mprn
            // row[2]:mprn address
            var new_address = executeEachAddress(row[0], row[2]);

            var withouth_coma_address = row[2].replace(/[\s\s\/\\\(\)\|\?\[\].,!@#~*=_+^%$&`*":\-;<>]+/g, ' ');
            if (/[A-Z]/.test(withouth_coma_address) == false) {
                addresss_not_E.push([row[0], row[2], withouth_coma_address]);
            }

            list_MPRN.push([row[0], row[2], new_address]);
            readline.clearLine(process.stdout, 0);
            readline.cursorTo(process.stdout, 0);
            process.stdout.write(progress_count_OpenData + "/" + 908028 + "   ==> " + Number(progress_count_OpenData / 908028 * 100).toFixed(2) + "%");
        }).on('end', function () {
            //do something wiht csvData
            
            console.log();
            var max_space = require('../../globalVariable/max_space');
            console.log(max_space.max_space + "\n  =>>> " + max_space.old_address + "\n ==>>>" + max_space.address);
            var mprn_info = require('../../globalVariable/info_MPRN_address');
            var col_num = [];
            for (let index = 1; index <= max_space.max_space; index++) {
                col_num.push('Col' + (index));
            }
            var list_word = ['MPRN', 'Original_Address', 'New_Address'].concat(col_num);
            list_word.push('Address_No_County')
            mprn_info.push(list_word);
            var add_info_mprn = require('../../functions_OPENDATA/add_info_mprn');
            list_MPRN.forEach(address => {
                if (address[2] != undefined) {
                    add_info_mprn(address[0], address[1], address[2]);
                }
            });
            var toCSV = require('../../functions_OPENDATA/toCSV');
            toCSV();
            // var dict_counties = require('../../globalVariable/dict_counties');
            // console.log(dict_counties);
            // var data = JSON.stringify(dict_opendata);
            // fs.writeFileSync('opendata.json',data);
            // var dict_unique_last_word = require('../../globalVariable/dict_unique_last_word');
            // Object.keys(dict_unique_last_word).map(word =>{
            //     if (dict_unique_last_word[word].length >1){
            //         console.log(word+": "+dict_unique_last_word[word]);
            //     }
            // })
            console.log('Done');
        })
}

module.exports = opendata;