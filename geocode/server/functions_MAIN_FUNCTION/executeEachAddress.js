// Perform with each address
var dict_counties = require('../globalVariable/dict_counties');
var format_address = require('./format_address');
var lookFor = require('./lookFor');
var new_address;
var executeEachAddress = function (mprn,address) {
    new_address = format_address(address); // to execute each address
    //lookFor("   => ", new_address);
    // put into dictionary of counties
    new_address = new_address.replace(/\b\sIRELAND\b/g, "");
    var list_word = new_address.split(" ");
    if (list_word[list_word.length-1].match(/[0-9]/)){
        list_word=list_word.slice(0,list_word.length-1);
    }
    if (dict_counties.hasOwnProperty(list_word[list_word.length-1])){
        dict_counties[list_word[list_word.length-1]][mprn]=[new_address];
    }else if (/\bBAILE ATHA CLIATH\b/.test(new_address)){
        dict_counties['UNDEFINED'][mprn]=[address,new_address];
    }else{
        if (new_address==""){
            dict_counties['NO_WORD'][mprn]=[address,new_address];
        }else{
            //console.log(new_address);
            dict_counties['UNDEFINED'][mprn]=[address,new_address];
        }
    }
    return new_address;
}


module.exports = executeEachAddress;