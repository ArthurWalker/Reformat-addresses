var lookFor = function(address){
    //search for a standalone word with this format : \bCOUNTY\b
    // can test with this : \W -> negate of \w which means words
    
    //var word = /[\/\\\(\)\|\?\[\].,!'@#~*=_+^%$&`*":\-;<>]+/;
    var word = /[0-9][A-Z]/;
    if (address!=null && word.test(address.toUpperCase())){
        console.log(address);
    }
}

module.exports=lookFor;