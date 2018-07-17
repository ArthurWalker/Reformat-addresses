var lookFor = function(sentence,address){
    //search for a standalone word with this format : \bCOUNTY\b
    // can test with this : \W -> negate of \w which means words
    
    //var word = /[\/\\\(\)\|\?\[\].,!'@#~*=_+^%$&`*":\-;<>]+/;
    var word =/\b([A-Z]+)\s+\1\b/; // search duplicate words in javascript
    //var word=/\bROAD\s\sROAD\b/;
    if (address!=null && word.test(address.toUpperCase())){
        console.log(sentence+" "+address);
    }
}
module.exports=lookFor;