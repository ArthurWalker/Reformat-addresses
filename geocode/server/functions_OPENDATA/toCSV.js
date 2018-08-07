var toCSV = function () {
    var toCSV = require('../functions_MAIN_FUNCTION/toCSV');
    // var dup_list = require('../globalVariable/dup_list');
    // toCSV(dup_list.dup_list1_5, 'address_1_5');
    // toCSV(dup_list.dup_list2_0, 'address_2_0');
    // var dict_counties = require('../globalVariable/dict_counties');
    // toCSV([dict_counties['UNDEFINED']], 'undefined');
    var info_MPRN = require('../globalVariable/info_MPRN_address');
    toCSV(info_MPRN,'info_MPRN_address');
}
module.exports = toCSV;