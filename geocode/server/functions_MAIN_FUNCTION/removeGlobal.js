var removeGlobal = function (formated_address) {
    var removeDup = require('./removeDup');
    var word = /\b([A-Z]+)\s+\1\b/;
    if (word.test(formated_address)) {
        formated_address = removeDup(formated_address);
    }
    var removeDup_Dub = require('./removeDup_Dub');
    var sperateLet_Num = require('./sperateLet_Num');
    var word2 = /\b([A-Z]+)\s([0-9]+)(\s\1\s\2)+\b/;
    if (word2.test(formated_address)) {
        formated_address = removeDup_Dub(formated_address);
        formated_address = sperateLet_Num(formated_address);
    }
    var d6W = /\b[A-Z]+6W\b/;
    var remove6W = require('./remove6W');
    if (d6W.test(formated_address)) {
        formated_address = remove6W(formated_address);
    }
    var word3 = /\b([0-9]+[A-Z]+)\s\1\b/;
    if (word3.test(formated_address)) {
        formated_address = removeDup(formated_address);
    }
    return formated_address;
}

module.exports = removeGlobal;