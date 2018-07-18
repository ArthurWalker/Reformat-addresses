var dict_counties = require('../dict_counties');
var long_names = function (formated_address) {
    var posi = formated_address.search(/[A-Z]/);
    formated_address=formated_address.substring(0,posi+1)+" "+formated_address.substring(posi+1,);
    var list_word = formated_address.split(" ");
    dict_counties[list_word[list_word.length-2]].forEach(address => {
        
    });
}

module.exports = long_names;