var lookFor = function(address){
    //search for a standalone word with this format : \bCOUNTY\b
    var word = /[\/\\\(\)\|\?\[\].,!'@#~*=_+^%$&`*":\-;<>]+/;
    if (address!=null && word.test(address.toUpperCase())){
        console.log(address);
    }
}

module.exports=lookFor;