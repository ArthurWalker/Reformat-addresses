var count_unique_part = require('./count_unique_part');
var remove_dup_long_term = function (formated_address) {
    formated_address = formated_address.replace(/\bIRELAND\b/, "");
    var list_word_occurences = count_unique_part(formated_address)[0];
    var count2 = 0;
    var not_count2_or3 = 0;
    var count3 = 0;
    var dict = {};
    list_word_occurences.forEach(token => {
        dict[token[0]] = token[1];
        if (dict[token[0]] == 2) {
            count2++;
        }
        if (dict[token[0]] == 3) {
            count3++;
        }
        if (dict[token[0]] >= 2) {
            not_count2_or3++;
        }
    });
    if (count3 == list_word_occurences.length || count2 == list_word_occurences.length) {
        var new_address = [];
        var list_word = formated_address.split(" ");
        list_word.some(function (token) {
            if (new_address.indexOf(token) != -1) {
                return true;
            }
            new_address.push(token);
        });
        formated_address = new_address.join(" ");
    }
    else if (count2 != list_word_occurences.length && count3 != list_word_occurences.length && Number(not_count2_or3 / list_word_occurences.length * 100).toFixed(2) >= 60) {
        // console.log(dict);
        // console.log('Before: ' + Number(not_count2_or3 / Object.keys(dict).length * 100).toFixed(2) + '% dup:' + formated_address);
        if (/\b(^([0-9]+|[A-Z]+)\s[A-Z]+\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 1<word>");
            formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s)\b/, "");
            if (/\b(^([0-9]+|[A-Z]+)\s[A-Z]+\s)\1\b/.test(formated_address)) {
                formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s)\b/, "");
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 2<word>");
            formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s)\b/, "");
            if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s)\1\b/.test(formated_address)) {
                formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s)\b/, "");
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 3<word> (1<num>)");
            formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\b/, "");
            if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
                formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\b/, "");
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 4<word> (1<num>)");
            formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\b/, "");
            if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
                formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\b/, "");
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 5<word> (1<num>)");
            formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\b/, "");
            if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
                formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\b/, "");
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 6<word> (1<num>)");
            formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\b/, "");
            if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
                formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\b/, "");
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 7<word> (1<num>)");
            formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\b/, "");
            if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
                formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\b/, "");
            }
        }else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s6W\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 7<word> (1<num>)");
            formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\b/, "");
            if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
                formated_address = formated_address.replace(/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\b/, "");
            }
        }
    }

    formated_address = formated_address + "IRELAND";

    // Checking results
    // list_word_occurences = count_unique_part(formated_address)[0];
    // var count2 = 0;
    // var not_count2_or3 = 0;
    // var count3 = 0;
    // var dict = {};
    // list_word_occurences.forEach(token => {
    //     dict[token[0]] = token[1];
    //     if (dict[token[0]] == 2) {
    //         count2++;
    //     }
    //     if (dict[token[0]] == 3) {
    //         count3++;
    //     }
    //     if (dict[token[0]] >= 2) {
    //         not_count2_or3++;
    //     }
    // });
    // if (Number(not_count2_or3 / list_word_occurences.length * 100).toFixed(2) >= 65) {
    //     console.log(dict);
    //     console.log("Address: " + formated_address);
    //     console.log();
    // }
}

module.exports = remove_dup_long_term;