var count_unique_part = require('./count_unique_part');
var count = require('../globalVariable/count');
var deal_with_sub_dup = require('./deal_with_sub_dup');

var remove_dup_long_term2 = function (formated_address) {
    formated_address = formated_address.replace(/\bIRELAND\b/, "");
    formated_address = formated_address.trim();
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
    var replaceDUP = require('./replaceDUP');
    if (formated_address.split(" ").length / list_word_occurences.length >= 1.5) {
        count.dup_total += 1;
        // console.log();
        // console.log(dict);
        var old = formated_address;

        var replace_special_case = require('./replace_special_case');
        formated_address = replace_special_case(formated_address);

        if (count3 == list_word_occurences.length || count2 == list_word_occurences.length) {
            var new_address = [];
            var list_word = formated_address.split(" ");
            new_address = list_word.slice(0, list_word_occurences.length);
            formated_address = new_address.join(" ");
        }
        // console.log('Before: ' + Number(not_count2_or3 / Object.keys(dict).length * 100).toFixed(2) + '% dup:' + formated_address);
        if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 1<word>");
            formated_address = replaceDUP("(^([0-9]+|[A-Z]+)\\s[A-Z]+\\s)", formated_address);
            if (formated_address.split(" ").length / list_word_occurences.length >= 2) {
                // console.log(dict);         
                // console.log(" Old 1: "+old);
                formated_address = deal_with_sub_dup("(([0-9]+|[A-Z]+)\\s[A-Z]+\\s)", formated_address);
                // console.log("=======>" + formated_address);
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 2<word>");
            formated_address = replaceDUP("(^([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s)", formated_address);
            if (formated_address.split(" ").length / list_word_occurences.length >= 2) {
                // console.log(dict);
                // console.log(" Old 2: "+old);
                formated_address = deal_with_sub_dup("(([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s)", formated_address);
                // console.log("=======>" + formated_address);
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 3<word> (1<num>)");
            formated_address = replaceDUP("(^([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s([A-Z]+|[0-9]+)\\s)", formated_address);
            if (formated_address.split(" ").length / list_word_occurences.length >= 2) {
                // console.log(dict);
                // console.log(" Old 3: "+old);
                formated_address = deal_with_sub_dup("(([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s([A-Z]+|[0-9]+)\\s)", formated_address);
                // console.log("=======>" + formated_address);
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 4<word> (1<num>)");
            formated_address = replaceDUP("(^([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s([A-Z]+|[0-9]+)\\s)", formated_address);
            if (formated_address.split(" ").length / list_word_occurences.length >= 2) {
                // console.log(dict);
                // console.log(" Old 4: "+old);
                formated_address = deal_with_sub_dup("(([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s([A-Z]+|[0-9]+)\\s)", formated_address);
                // console.log("=======>" + formated_address);
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 5<word> (1<num>)");
            formated_address = replaceDUP("(^([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s([A-Z]+|[0-9]+)\\s)", formated_address);
            if (formated_address.split(" ").length / list_word_occurences.length >= 2) {
                // console.log(dict);
                // console.log(" Old 5: "+old);
                formated_address = deal_with_sub_dup("(([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s([A-Z]+|[0-9]+)\\s)", formated_address);
                // console.log("=======>" + formated_address);
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 6<word> (1<num>)");
            formated_address = replaceDUP("(^([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s([A-Z]+|[0-9]+)\\s)", formated_address);
            if (formated_address.split(" ").length / list_word_occurences.length >= 2) {
                // console.log(dict);
                // console.log(" Old 6: "+old);
                formated_address = deal_with_sub_dup("(([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s([A-Z]+|[0-9]+)\\s)", formated_address);
                // console.log("=======>" + formated_address);
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 7<word> (1<num>)");
            formated_address = replaceDUP("(^([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s([A-Z]+|[0-9]+)\\s)", formated_address);
            if (formated_address.split(" ").length / list_word_occurences.length >= 2) {
                // console.log(dict);
                // console.log(" Old 7: "+old);
                formated_address = deal_with_sub_dup("(([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s([A-Z]+|[0-9]+)\\s)", formated_address);
                // console.log("=======>" + formated_address);
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s6W\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 7<word> (1<num>)");
            formated_address = replaceDUP("(^([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s6W\\s)", formated_address);
            if (formated_address.split(" ").length / list_word_occurences.length >= 2) {
                // console.log(dict);
                // console.log(" Old 8: "+old);
                formated_address = deal_with_sub_dup("(([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s6W\\s)", formated_address);
                // console.log("=======>" + formated_address);
            }
        } else if (/\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s6W\s)\1\b/.test(formated_address)) {
            //console.log("   => 1<num> 7<word> (1<num>)");
            formated_address = replaceDUP("(^([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s6W\\s)", formated_address);
            if (formated_address.split(" ").length / list_word_occurences.length >= 2) {
                // console.log(dict);
                // console.log(" Old 8: "+old);
                formated_address = deal_with_sub_dup("(([0-9]+|[A-Z]+)\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s[A-Z]+\\s6W\\s)", formated_address);
                // console.log("=======>" + formated_address);
            }
        } 
        if (count2==list_word_occurences.length-1 && formated_address.split(" ").length / list_word_occurences.length >= 2){
            // console.log(formated_address);
            formated_address = formated_address.substring(formated_address.length/2,).trim();
        }
        var dup_list = require('../globalVariable/dup_list');
        
        if (formated_address.split(" ").length / list_word_occurences.length >= 1.5) {
            dup_list.dup_list1_5.push([old, formated_address]);
        }
        if (formated_address.split(" ").length / list_word_occurences.length >= 2) {
            // console.log(dict);
            // // Checking results
            // console.log('=> '+old);
            // console.log('===> Stil have ' + formated_address);
            dup_list.dup_list2_0.push([old, formated_address]);
        }
    }

    return formated_address;
}

module.exports = remove_dup_long_term2;