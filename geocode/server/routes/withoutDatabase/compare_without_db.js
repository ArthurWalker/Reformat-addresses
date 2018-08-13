var fs = require('fs');
var readline = require('readline');
var parse = require('csv-parse');
var match = require('../../globalVariable/match');
var dict_address = require('../../globalVariable/dict_address');
var compare_without_db = function (req, res) {
  
  var progress_count_GeoDirectory_Data = 0;
  fs.createReadStream('../../OpenData.csv').pipe(parse({ delimiter: ',' }))
    .on('data', function (row) {
      if (row[1]!=undefined){
        dict_address[row[0]] = [row[2]];
      }
    }).on('end', function () {
      fs.createReadStream('../../geo_address_with_county.csv').pipe(parse({ delimiter: ',' }))
        .on('data', function (row2) {
          Object.keys(dict_address).map(key => {
            var regexString = '\\b' + dict_address[key][0] + '\\b';
            var regex = new RegExp(regexString);
            if (regex.test(row2[2])) {
              dict_address[key].push([row2[0], row2[1]]);
            }
          })
          readline.clearLine(process.stdout, 0);
          readline.cursorTo(process.stdout, 0);
          progress_count_GeoDirectory_Data += 1;
          process.stdout.write(progress_count_GeoDirectory_Data + "/" + 2202126 + "   ==> " + Number(progress_count_GeoDirectory_Data / 2202126 * 100).toFixed(2) + "%");
        }).on('end', function () {
          console.log(dict_address);
          console.log('Done');
        }).on('error',function(err){
          console.log(err);
        })
    });
}

module.exports = compare_without_db;