var deal_with_sub_dup = function (test, formated_address) {
    var regexString = "\\b" + test + "\\b";
    var regex = new RegExp(regexString, 'g');
    var dup_regexString = "\\b" + test + "\\1\\b";
    var regex_dup = new RegExp(dup_regexString);
    var start_posi = formated_address.search(regex_dup);
    //console.log(start_posi);
    if (start_posi != -1) {
        var matches = formated_address.substring(start_posi, ).match(regex);
       // console.log('===> Dup term:' + matches);
        var lastMatch = matches[0];
        var regex_replace = new RegExp(lastMatch, 'g');
        formated_address = formated_address.substring(0, start_posi) + formated_address.substring(start_posi, ).replace(regex_replace, "");
    }
    else {
        var count_unique_part = require('./count_unique_part');
        var list_word_occurences = count_unique_part(formated_address)[0];
        var new_address = [];
        var list_word = formated_address.split(" ");
        new_address = list_word.slice(0, list_word_occurences.length+1);
        formated_address = new_address.join(" ");
        //console.log(' ==== > Result: '+formated_address);
    }
    return formated_address;
}

module.exports = deal_with_sub_dup;