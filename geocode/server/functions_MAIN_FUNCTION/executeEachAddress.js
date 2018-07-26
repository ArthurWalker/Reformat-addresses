// Perform with each address
var format_address = require('./format_address');
var lookFor = require('./lookFor');
var new_address;
var executeEachAddress = function (list_results,dict_results,all_addresses,MPRN, address) {
    new_address = format_address(address); // to execute each address
    list_results.push([MPRN, address, new_address]); // list of resukts -> to put into files to download
    dict_results[address] = new_address;  // dictionary of results
    all_addresses += new_address + " "; // to find unique address
    // Create Table in database
    var insert_table = require('./insert_table')
    insert_table([MPRN, address, new_address]);
    //lookFor("   => ", new_address);
    return list_results,dict_results,all_addresses;
}


module.exports= executeEachAddress;