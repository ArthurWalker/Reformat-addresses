var sql = require('mssql');
var config = require('../database');

var insert_table = function (new_address) {
    new sql.ConnectionPool(config.configOPEN_DATA).connect().then(function (pool) {
        var query = "insert into PP_Match_Address (BUILDING_ID, ADDRESS_POINT_ID, ADDRESS_IN_GEO ) values ('"+new_address[0]+"','"+new_address[1]+"','"+new_address[2]+"')";
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