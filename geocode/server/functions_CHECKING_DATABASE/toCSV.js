var fs = require('fs');
var csv = require('fast-csv');
var csvWriter = require('csv-write-stream');
var toCSV = function (arrayOfObjects1) {
    var writer = csvWriter();
    if (!fs.existsSync("addresses.csv"))
        writer = csvWriter({ headers: ["header1", "header2","header3"] });
    else
        writer = csvWriter({ sendHeaders: false });

    writer.pipe(fs.createWriteStream("addresses.csv", { flags: 'a' }));
    writer.write({
        header1: arrayOfObjects1[0],
        header2: arrayOfObjects1[1],
        header3: arrayOfObjects1[2],
    });
    writer.end();
}

module.exports = toCSV;