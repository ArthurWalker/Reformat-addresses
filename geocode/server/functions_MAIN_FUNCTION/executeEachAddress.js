// Perform with each address
var format_address = require('./format_address');
var lookFor = require('./lookFor');
var new_address;
var executeEachAddress = function (MPRN, address) {
    new_address = format_address(address); // to execute each address

    // Create Table in database
    var update_table = require('./update_table')
    update_table([MPRN, address, new_address]);
    //lookFor("   => ", new_address);
    return new_address;
}


module.exports = executeEachAddress;