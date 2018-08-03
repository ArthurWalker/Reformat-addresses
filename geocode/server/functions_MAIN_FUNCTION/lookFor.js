var max_space = require('../globalVariable/max_space')
var lookFor = function (sentence, address) {
    //search for a standalone word with this format : \bCOUNTY\b
    // can test with this : \W -> negate of \w which means words

    //var word = /[\/\\\(\)\|\?\[\].,!'@#~*=_+^%$&`*":\-;<>]+/;
    //var word =/\b([A-Z]+)\s+\1\b/; // search duplicate words in javascript
    //var word = /\b([A-Z]+)\s([0-9]+)(\s\1\s\2)+\b/;// search duplicate terms including word+num
    //var word = /([0-9]+[A-Z]+)|([A-Z]+[0-9]+)/; // search char+digit or digit+char
    //var word = /\b([0-9]+[A-Z]+)\s\1\b/;//search for <num><world>
    //var word = /\b([A-Z]+[0-9]+)\s\1\b/;// search for <word><num>
    //var word =/\bAPTS\b/; // search for shortcut word APTS
    //var word =/\bD[0-9]+\b/;// search for D<num>
    //var word = /\bST\b/; // search for ST (can be misunderstanding)
    //var word = /\bDUBLIN[0-9]+\b/
    //var word = /\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/;
    // var list_word = address.split(' ');
    // var word_len = list_word.length-1;
    // var 
    // if (address != null && word.test(address.toUpperCase()) && /\b(([0-9]+|[A-Z]+)\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s[A-Z]+\s([A-Z]+|[0-9]+)\s)\1\b/.test(address)) {
    //     console.log(sentence + " " + address);
    // }
    // if (word_len > max_space.max_space){
    //     max_space.max_space=word_len;
    //     max_space.address=address;
    // }
}
module.exports = lookFor;