// Perform with each address
var dict_counties = require('../globalVariable/dict_counties');
var format_address = require('./format_address');
var lookFor = require('./lookFor');
var add_county = require('./add_county');
var new_address;
var executeEachAddress = function (mprn, address) {
    new_address = format_address(address); // to execute each address
    lookFor("   => ", address, new_address);
    // put into dictionary of counties
    new_address = new_address.replace(/\b\sIRELAND\b/g, "");
    var list_word = new_address.split(" ");

    // add county
    if (dict_counties.hasOwnProperty(list_word[list_word.length - 1]) == false && new_address!=undefined) {
        var list_result = add_county(mprn,list_word);
        list_word = list_result[1];
        new_address = list_result[0];
    }

    if (dict_counties.hasOwnProperty(list_word[list_word.length - 1])) {
        dict_counties[list_word[list_word.length - 1]][mprn] = [new_address];
    } else {
        if (/[A-Z]/.test(new_address)) {
            dict_counties['UNDEFINED'][mprn] = [new_address];
            // checking last word unique
            var dict_unique_last_word = require('../globalVariable/dict_unique_last_word');
            var list_word2 = new_address.split(" ");
            if (dict_unique_last_word.hasOwnProperty(list_word2[list_word2.length - 1])) {
                dict_unique_last_word[list_word2[list_word2.length - 1]].push(new_address);
            } else {
                dict_unique_last_word[list_word2[list_word2.length - 1]] = [new_address];
            }
        } else {
            //console.log(new_address);
            dict_counties['NO_WORD'][mprn] = [new_address];
        }
    }
    return new_address;
}


module.exports = executeEachAddress;