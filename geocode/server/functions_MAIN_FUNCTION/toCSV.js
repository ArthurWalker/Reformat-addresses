var fs = require('fs');
var csv = require('fast-csv');

var sort = function (dict) {
    var sortable = [];
    for (var word in dict) {
        sortable.push([word, dict[word]]);
    }
    return sortable;
}

var toCSV = function (arrayOfObjects1, filename) {
    //csv.write(arrayOfObjects1,{headers:true}).pipe(fs.createWriteStream('word_occurences_statistic.csv'));
    // csv.write([arrayOfObjects2],{headers:true}).pipe(fs.createWriteStream('nums_word_statistic.csv'));
    // Object.keys(arrayOfObjects2).map(function(key) {
    //     csv.write(sort(arrayOfObjects2[key]),{headers:true}).pipe(fs.createWriteStream("table_"+key+"_letters.csv"));
    // });
    csv.write(arrayOfObjects1, { headers: true }).pipe(fs.createWriteStream(filename + '.csv')).on("finish", function () {
        console.log(" Done writing to CSV file");
    });;
}

module.exports = toCSV;