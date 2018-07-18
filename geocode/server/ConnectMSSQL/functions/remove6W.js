var removeDup = require('./removeDup');

var remove6W = function (address) {
    var word = /\b([A-Z]+\s6W)\s+\1\b/;
    if (word.test(address)) {
        address = removeDup(address);
    }
    var word2 = /\b([A-Z]+6W)\s+\1\b/;
    if (word2.test(address)) {
        address = removeDup(address);
    }
    var posi = address.search(/[A-Z]6W/);
    return address.substring(0, posi + 1) + " " + address.substring(posi + 1, );
}

module.exports = remove6W;