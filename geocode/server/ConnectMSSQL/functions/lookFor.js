var lookFor = function(sentence,address){
    //search for a standalone word with this format : \bCOUNTY\b
    // can test with this : \W -> negate of \w which means words
    
    //var word = /[\/\\\(\)\|\?\[\].,!'@#~*=_+^%$&`*":\-;<>]+/;
    //var word =/\b([A-Z]+)\s+\1\b/; // search duplicate words in javascript
    //var word = /\b([A-Z]+)\s([0-9]+)(\s\1\s\2)+\b/;// search duplicate terms including word+num
    var word = /([0-9]+[A-Z]+)|([A-Z]+[0-9]+)/; // search char+digit or digit+char
    //var word = /\b([0-9]+[A-Z]+)\s\1\b/;//search for <num><world>
    //var word = /\b([A-Z]+[0-9]+)\s\1\b/;// search for <word><num>
    if (address!=null && word.test(address.toUpperCase())){
        console.log(sentence+" "+address);
    }
}
module.exports=lookFor;