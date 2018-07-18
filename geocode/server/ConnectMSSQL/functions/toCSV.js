var fs = require('fs');
var csv = require('fast-csv');

var sort = function (dict) {
    var sortable = [];
    for (var word in dict) {
        sortable.push([word, dict[word]]);
    }
    return sortable;
}

var toCSV = function (arrayOfObjects1, arrayOfObjects2) {
    // var wo = fs.createWriteStream('word_occurences_statistic.csv');
    // var nw = fs.createWriteStream('nums_word_statistic.csv');
    // csv.write(arrayOfObjects1,{headers:true}).pipe(wo);
    // csv.write([arrayOfObjects2],{headers:true}).pipe(nw);
    // Object.keys(arrayOfObjects2).map(function(key) {
    //     csv.write(sort(arrayOfObjects2[key]),{headers:true}).pipe(fs.createWriteStream("table_"+key+"_letters.csv"));
    // });
    // var formated_file = fs.createWriteStream('formated_addresses.csv');
    // csv.write(arrayOfObjects1,{headers:true}).pipe(formated_file);
    var formated_file = fs.createWriteStream('formated_addresses.csv');
    csv.write(arrayOfObjects1, { headers: true }).pipe(formated_file);
    console.log(" Done writing to CSV file");
}

module.exports = toCSV;