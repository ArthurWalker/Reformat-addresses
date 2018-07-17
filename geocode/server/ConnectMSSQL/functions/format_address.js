var format_address = function(address){
    var hasChar=/[0-9a-zA-Z].*/;
    var formated_address="";
    
    if (hasChar.test(address)&& address != null){
    //RULE: remove the first space and the last space
        address=address.trim();
        
    //RULE: Add Ireland at the end of each address    
        formated_address= address+" Ireland";
        formated_address=formated_address.toUpperCase();

    //RULE: Formating: replace special characters and big gap -> 1 space
        formated_address=formated_address.replace(/[\s\/\\\(\)\|\?\[\].,!'@#~*=_+^%$&`*":\-;<>]+/g,' ');

    //RULE: Replace County
        var replaceCounty=require('./replaceCounty');
        formated_address=replaceCounty(formated_address);

    // RULE: Replace shortcut
        var replaceShort=require('./replaceShort');
        formated_address=replaceShort(formated_address);

    //RULE : Seperate all alphnumeric words
        var seperateAlNum=require('./seperateAlNum');
        if (/\b[0-9]+[A-Z]+\b/.test(formated_address)){
            formated_address= seperateAlNum(formated_address);
        }
    
    //RULE: Formating: remove all single letters
        formated_address=formated_address.replace(/\b[A-Z]\b/g,'');

    //RULE: Formating: remove all duplicate words standing together
        var removeDup=require('./removeDup');
        var word =/\b([A-Z]+)\s+\1\b/;
        if (word.test(formated_address)){
            formated_address=removeDup(formated_address);
        }
    }
    
    formated_address=formated_address.toUpperCase();
    return formated_address;
}

module.exports=format_address;