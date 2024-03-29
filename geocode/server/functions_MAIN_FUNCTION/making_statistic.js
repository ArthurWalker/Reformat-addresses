var making_statistic = function (all_addresses, dict_results, list_results) {
    // Statistic purpose:
    // Count occurences with an array format including sortable which is word_occurences[0]) and dictionary which is word_occurences[1])
    console.log("===========> Counting...");
    var count_unique_part = require('./count_unique_part');
    var word_occurences = count_unique_part(all_addresses);

    // Summary data
    console.log("===========> Summary...");
    var summary = require('./summary');
    // table 1: nums of ouccrences with incremental id: 
    var occurences_table_with_num = summary(word_occurences[0])[0];
    // table 2: the length of words:  occurences_table_with_length_word
    var occurences_table_with_length_word = summary(word_occurences[0])[1];

    // Compare unique parts with addresses
    const data1 = occurences_table_with_num;
    const data2 = occurences_table_with_length_word;
    console.log("===========> Comparing...");
    var uni_occu = require('./uni_occ');
    uni_occu(dict_results, data1);

    console.log();
    // var max_space = require('../../globalVariable/max_space');
    // console.log(max_space.max_space+"  =>>> "+max_space.address);
    var count = require('../globalVariable/count');
    console.log(count.dup_total);

    //Make CVS file and downloadx
    console.log("===========> Making CSV...");
    var dup_list = require('../globalVariable/dup_list');
    var toCSV = require('./toCSV');
    // toCSV(dup_list.dup_list1_5,'address_1_5');
    //toCSV(dup_list.dup_list2_0,'address_2_0');
    //toCSV(list_results, null); //Put formated addresses into file
    //var dict_counties = require('../globalVariable/dict_counties');
    toCSV(list_results,'first_n_rows');
}

module.exports = making_statistic;