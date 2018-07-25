var sql = require('mssql');
var config = require('../database');

var show_rows = function () {
    var total=0;
    new sql.ConnectionPool(config.configOPEN_DATA).connect().then(function (pool) {
        var query = "select count(*) as TOTAL from TD_MPRN_GUID_LINK";
        return pool.request().query(query)
    }).then(results => {
        total = (results.recordset.TOTAL);
        sql.close();
    }).catch(err => {
        console.log("Error with showing total rows in TD_MPRN_GUID_LINK: "+err);
        sql.close();
    });
    return total;
}

module.exports = show_rows;