var add_info_mprn = function (mprn, old_address, new_address) {
    var info_MPRN = require('../globalVariable/info_MPRN_address');
    var max_space = require('../globalVariable/max_space');
    //console.log([mprn,old_address,new_address]);
    var list_word = new_address.split(" ");
    var dict_counties = require('../globalVariable/dict_counties');
    var list_word_with_special_char = new_address;
    if (list_word.length < max_space.max_space){
        list_word_with_special_char = ('# '.repeat(max_space.max_space-list_word.length)+new_address).split(" ");
    }else{
        list_word_with_special_char = new_address.split(" ");
    }
    if (list_word[list_word.length - 1].match(/[0-9]/)) {
        list_word = list_word.slice(0, list_word.length - 1);
    }
    if (dict_counties.hasOwnProperty(list_word[list_word.length - 1])) {
        list_word = list_word.slice(0, list_word.length - 1);
    }
    info_MPRN.push([mprn, old_address, new_address, list_word_with_special_char, list_word.join(" ")]);
}
module.exports = add_info_mprn;