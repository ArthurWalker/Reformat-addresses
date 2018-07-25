var sql = require('mssql');
var config = require('../database');

var insert_table = function (new_address) {
    new sql.ConnectionPool(config.configOPEN_DATA).connect().then(function (pool) {
        var query = "insert into PP_Formated_MPRN_Address (MPRN, MPRN_Address, New_MPRN_Address ) values ('"+new_address[0]+"','"+new_address[1]+"','"+new_address[2]+"')";
        return pool.request().query(query)
    }).then(results => {
        sql.close();
    }).catch(err => {
        console.log("Error with inserting in PP_Formated_MPRN_Address: "+err);
        sql.close();
    });
}

module.exports = insert_table;