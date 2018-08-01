var dict_counties = require('../dict_counties');
var dict_counties_geo = require('../dict_counties_Geo');



var progress_count_OpenData = 0;
var compare_without_db = function (req, res) {
    Object.keys(dict_counties).map(key => {
        Object.keys(dict_counties[key]).map(k => {
            Object.keys(dict_counties_geo[key]).map(ke => {
                if (ke.includes(dict_counties[key][k])) {
                    dict_counties[key][k].push(ke);
                    dict_counties[key][k].push(dict_counties_geo[key][ke]);
                }
                progress_count_OpenData += 1;
                readline.clearLine(process.stdout, 0);
                readline.cursorTo(process.stdout, 0);
                process.stdout.write(progress_count_OpenData + "/" + 908028 + "   ==> " + Number(progress_count_OpenData / 908028 * 100).toFixed(2) + "%");
            });
        });
    });
    console.log('Done inserting. Now is printing');
    Object.keys(dict_counties).map(key => {
        Object.keys(dict_counties[key]).map(k => {
            if (dict_counties[key][k].length >= 3) {
                console.log(dict_counties[key][k]);
            }
        })
    })
}

module.exports = compare_without_db;