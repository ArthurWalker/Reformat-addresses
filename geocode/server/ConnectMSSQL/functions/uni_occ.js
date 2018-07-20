var uni_occ = function(dict_results,data1){
    var count_occ=0;
    var count_len=0;
    var dict_word_occ={};
    console.log("===========> Considering concurrence <=5...");
    data1.forEach(element => {
        if (/[A-Z]/.test(element[1]) && element[2]<=5){
            dict_word_occ[element[1]]=element[2];
            count_occ+=1;
        }
    });
    //console.log(dict_word_occ);
    console.log("===========> Considering word.length >= 30...");
    Object.keys(dict_results).map(function(key) {
        if (dict_results[key].length >=45){
            count_len+=1;
        }
    });
    console.log("There are "+count_len+" addresses whose words are more than 30 characters ")
    console.log("There are "+count_occ+" addresses which repeats less than 5 times");
}
module.exports=uni_occ;