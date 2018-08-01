var { poolPromise } = require('../database');
var readline = require('readline');
var dict_counties = require('../dict_counties');
var count = require('../count');
var find_match = async function (mprn, county, address) {
    try {
        let pool = await poolPromise;
        let request = await pool.request();
        var query = "select ADDRESS_LINE,BUILDING_ID,ADDRESS_POINT_ID from (select BUILDING_ID,ADDRESS_POINT_ID,concat(ADDR_LINE_1,' ',[ADDR_LINE_2],' ',[ADDR_LINE_3],' ',[ADDR_LINE_4],' ',[ADDR_LINE_5],' ',[ADDR_LINE_6],' ',[ADDR_LINE_7],' ',[ADDR_LINE_8],' ',[ADDR_LINE_9],' ',[ADDR_LINE_10]) as 'ADDRESS_LINE' from [GeoDirectory].[dbo].[NewGeoRecord] as N where PRINCIPAL_POST_TOWN like \'%" + county + "%\' or COUNTY like \'%" + county + "%\' ) as A where ADDRESS_LINE like \'%" + address + "%\'";
        request.query(query).then(result => {
            console.log('Looking for '+address);
            if (result.recordset.length >=2){
                //var deal with multiple result
                count.count_match+=1;
                //console.log("==>>>Found many results");
                var deal_with_multiple_result = require('./deal_with_results');
                //deal_with_multiple_result(county,mprn,result.recordset);
            }else if (result.recordset.length ==1){
                //console.log('==>>>Found 1 result');
                dict_counties[county][mprn].push(result.recordset[0]);
            }else{
                count.count_no_match+=1;
                //console.log('No match');
            }
        }).catch(err => {
            console.log(err);
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = find_match;