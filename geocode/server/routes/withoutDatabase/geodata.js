var fs = require('fs');
var parse = require('csv-parse');
var readline = require('readline');
var dict_counties_geo = require('../../globalVariable/dict_counties_Geo');
var geo_address = require('../../globalVariable/geo_address');

var geodata = function (req, res) {
    var progress_count_GeoDirectory_Data = 0;
    //read from csv
    var s = fs.createReadStream('../../GeoDirectoryData.csv')
        .pipe(parse({ delimiter: ',' }))
        .on('data', function (row) {
            //do something with csvrow
            var list_word = row.slice(17, 27);
            var posi = list_word.indexOf('NULL');
            var address_line = list_word.slice(0, posi - 1).join(' ');
            // 0 BUILDING_ID,
            // 1 ADDRESS_POINT_ID,
            // 2 ADDRESS_REFERENCE,
            // 3 PERSONAL_NAME,
            // 4 ORGANISATION_NAME,
            // 5 DEPARTMENT,
            // 6 SUB_BUILDING_NAME,
            // 7 BUILDING_NAME,
            // 8 BUILDING_NUMBER
            // 9 ,BUILDING_GROUP_NAME,
            // 10 THOROUGHFARE,
            // 11 SECONDARY_THOROUGHFARE,
            // 12 LOCALITY,
            // 13 SECONDARY_LOCALITY,
            // 14 PRINCIPAL_POST_TOWN,
            // 15 COUNTY,
            // 16 EIRCODE,
            // 17 ->26 ADDR_LINE_1 -> 10,
            // 27 SMALL_AREA_REF,
            // 28 ATITUDE,
            // 29 LONGITUDE

            //row[17,27]:ADDRESS_LINE
            if (dict_counties_geo.hasOwnProperty(row[15])) {
                dict_counties_geo[row[15]][address_line] = [row[0], row[1]];
            } else if (dict_counties_geo.hasOwnProperty(row[14])) {
                dict_counties_geo[row[14]][address_line] = [row[4], row[1]];
            }
            var list_word = address_line.split(" ");
            // Remove Dublin <NUM>
            if (/[0-9]+/.test(list_word[list_word.length - 1])) {
                list_word = list_word.slice(0, list_word.length - 1);
            }
            //Remove COUNTY
            list_word = list_word.slice(0, list_word.length - 1);
            var address_has_no_county_and_aircode = list_word.join(" ");
            geo_address.push([row[0], row[1], address_has_no_county_and_aircode]);

            readline.clearLine(process.stdout, 0);
            readline.cursorTo(process.stdout, 0);
            progress_count_GeoDirectory_Data += 1;
            process.stdout.write(progress_count_GeoDirectory_Data + "/" + 2202126 + "   ==> " + Number(progress_count_GeoDirectory_Data / 2202126 * 100).toFixed(2) + "%");
            // if (progress_count_GeoDirectory_Data==10){
            //     s.pause();
            //      change the function 'end' below to pause
            // }
        })
        .on('end', function () {
            //do something wiht csvData
            console.log();
            console.log(geo_address.length);
            var toCSV = require('../../functions_GEODATA/toCSV');
            toCSV();
            console.log('Done');
        })
        .on('error', function (err) {
            console.log(err);
            console.log('Error while reading file.')
        });
}

module.exports = geodata;