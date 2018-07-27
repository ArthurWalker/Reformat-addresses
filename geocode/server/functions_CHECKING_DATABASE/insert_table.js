var sql = require('mssql');
var config = require('../database');

var insert_table = function (new_address) {
    new sql.ConnectionPool(config.configOPEN_DATA).connect().then(function (pool) {
        var query = "insert into PP_Match_Address (BUILDING_ID, ADDRESS_POINT_ID, ADDRESS_IN_GEO ) values ('"+new_address.BUILDING_ID+"','"+new_address.ADDRESS_POINT_ID+"','"+new_address.ADDRESS_LINE+"')";
        return pool.request().query(query)
    }).then(results => {
        console.log(results);
        sql.close();
    }).catch(err => {
        console.log("Error with inserting in PP_Match_Address: "+err);
        sql.close();
    });
}

module.exports = insert_table;