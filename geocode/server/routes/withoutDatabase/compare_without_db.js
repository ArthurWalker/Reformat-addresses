var fs = require('fs');
var match = require('../../globalVariable/match');
var compare_without_db = function (req, res) {
  fs.readFile('../../first_several_rows.csv', (err, internFile) => {
    fs.readFile('../../geo_address_with_county.csv', (err, externFile) => {
      var internLines = internFile.toString().split('\n');
      var externLines = externFile.toString().split('\n');
      internLines.forEach(function (iLine) {
        var ilist = iLine.split(",");
        var iaddress = ilist[ilist.length - 1];
        if (iaddress != undefined) {
          externLines.forEach(function (eLine) {
            var elist = eLine.split(",");
            var eaddress = elist[elist.length - 1];
            var regex = new RegExp("\\b" + iaddress + "\\b");
            if (regex.test(eaddress)) {
              // console.log();
              // console.log("==>"+iaddress);
              // console.log("=====> "+eaddress);
            }
          })
        }
      })
    })
  })
}

module.exports = compare_without_db;