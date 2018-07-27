// Perform with each address
var format_address = require('./format_address');
var lookFor = require('./lookFor');
var new_address;
var executeEachAddress = function (address) {
    new_address = format_address(address); // to execute each address
    //lookFor("   => ", new_address);
    return new_address;
}


module.exports = executeEachAddress;