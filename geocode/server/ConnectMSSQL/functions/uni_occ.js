var uni_occ = function(dict_results,data1){
    var dict={};
    var dict_word_occ={};
    console.log("===========> Considering concurrence <=5...");
    data1.forEach(element => {
        if (/[A-Z]/.test(element[1]) && element[2]<=5){
            dict_word_occ[element[1]]=element[2];
        }
    });
    //console.log(dict_word_occ);
    console.log("===========> Considering word.length >= 30...");
    Object.keys(dict_results).map(function(key) {
        if (dict_results[key].length >=45){
            //console.log(dict_results[key]);
        }
    });
}
module.exports=uni_occ;