var count_unique_part = require('./count_unique_part');

var replaceDUP = function (test, formated_address) {
    var regexString = "\\b" + test + "\\b";
    var regex = new RegExp(regexString);
    var dup_regexString = "\\b" + test + "\\1\\b";
    var regex_dup = new RegExp(dup_regexString);
    //console.log(formated_address.match(regex));
    var address = formated_address;
    while (regex_dup.test(address)) {
        address = address.replace(regex, "");
    }

    // console.log("==>" + formated_address);
    // console.log("====>" + address);
    return address;
}

module.exports = replaceDUP;