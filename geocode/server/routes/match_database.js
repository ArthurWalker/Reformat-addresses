var list_address = require('./checking_database');
var list_results = require('./main_function');
var match_database = function(req,res){
    if (list_results.length <= 1 && list_address.length <=1){
        res.send("You need to execute main function function first by running localhost:5000 then checking database function by running localhost:5000/check");
    }else if (list_results.length <=1 && list_address.length >1 ){
        res.send("You need to execute main function function first by running localhost:5000 then checking database function by running localhost:5000/check");
    }else if (list_results.length > 1 && list_address.length <=1){
        res.send("You need to run checking database function first by running localhost:5000/check");
    }else {
        var match_MPRN_Address=require('../global_functions/match_MPRN_Addess');
        console.log(list_address, list_results);
        match_MPRN_Address(req,res,list_address,list_results);
    }
};

module.exports = match_database;