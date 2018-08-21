var fs = require("fs");
var parse = require("csv-parse");
var readline = require("readline");
var dict_counties_geo = require("../../globalVariable/dict_counties_Geo");
var geo_address = require("../../globalVariable/geo_address");

var geodata = function(req, res) {
  var progress_count_GeoDirectory_Data = 0;
  //read from csv
  fs.createReadStream("../../../Docs/GeoDirectoryData.csv")
    .pipe(parse({ delimiter: "," }))
    .on("data", function(row) {
      //do something with csvrow
      var list_word = row.slice(3, 16);
      if (row[15] == "NULL" && /\bDUBLIN\b/.test(row[14])) {
        list_word.push("DUBLIN");
      }
      var address_line = list_word.join(" ");
      address_line = address_line.replace(/\bNULL\b/g, "");
      var list_word2 = row.slice(3, 15);
      var address_line2 = list_word2.join(" ");
      address_line2 = address_line2.replace(/\bNULL\b/g, "");
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
      // Remove Dublin <NUM>
      // if (/[0-9]+/.test(list_word[list_word2.length - 1])) {
      //     list_word2 = list_word.slice(0, list_word2.length - 1);
      // }
      var address_has_no_aircode = address_line;
      var address_has_no_county = address_line2;
      if (/\b[0-9]+-[0-9]+\b/.test(address_line)) {
        var range_num = address_line.match(/\b[0-9]+-[0-9]+\b/);
        var po = range_num[0].indexOf("-");
        var num1 = parseInt(range_num[0].slice(0, po));
        var num2 = parseInt(range_num[0].slice(po + 1));
        var list_num = Array.from(Array(Math.abs(num2 - num1) + 1).keys()).map((v, i) => num1 + i);
        var string_num = list_num.join(' ');
        address_line = address_line.replace(range_num[0],string_num);
        row.push(address_has_no_county, address_has_no_aircode,address_line);
      } else if (/\b[0-9]+\/[0-9]+\b/.test(address_line)) {
        var range_num = address_line.match(/\b[0-9]+\/[0-9]+\b/);
        var string_num = range_num[0].replace('/',' ');
        address_line = address_line.replace(range_num[0],string_num);
        row.push(address_has_no_county, address_has_no_aircode,address_line);
      } else if (/\b[0-9]+_[0-9]+\b/.test(address_line)) {
        var range_num = address_line.match(/\b[0-9]+_[0-9]+\b/);
        var po = range_num[0].indexOf("_");
        var num1 = parseInt(range_num[0].slice(0, po));
        var num2 = parseInt(range_num[0].slice(po + 1));
        var list_num = Array.from(Array(parseInt((Math.abs(num2 - num1) + 1)/2)).keys()).map((v, i) => num1 + i*2);
        var string_num = list_num.join(' ');
        address_line = address_line.replace(range_num[0],string_num);
        row.push(address_has_no_county, address_has_no_aircode,address_line);
      }
      else {
        row.push(address_has_no_county, address_has_no_aircode);
      }
      geo_address.push(row);

      readline.clearLine(process.stdout, 0);
      readline.cursorTo(process.stdout, 0);
      progress_count_GeoDirectory_Data += 1;
      process.stdout.write(
        progress_count_GeoDirectory_Data +
          "/" +
          2202126 +
          "   ==> " +
          Number((progress_count_GeoDirectory_Data / 2202126) * 100).toFixed(
            2
          ) +
          "%"
      );
      // if (progress_count_GeoDirectory_Data == 10) {
      //     s.pause();
      //     // change the function 'end' below to 'pause'
      // }
    })
    .on("end", function() {
      //do something wiht csvData
      console.log();
      console.log(geo_address.length);
      var toCSV = require("../../functions_GEODATA/toCSV");
      toCSV();
      console.log("Done");
    })
    .on("error", function(err) {
      console.log(err);
      console.log("Error while reading file.");
    });
};

module.exports = geodata;
