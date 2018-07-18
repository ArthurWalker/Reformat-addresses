var format_address = function (address) {
    var hasChar = /[0-9a-zA-Z].*/;
    var formated_address = "";

    if (hasChar.test(address) && address != null) {
        //RULE: remove the first space and the last space
        address = address.trim();

        //RULE: Add Ireland at the end of each address    
        formated_address = address + " Ireland";
        formated_address = formated_address.toUpperCase();

        //RULE: Formating: replace special characters and big gap -> 1 space
        formated_address = formated_address.replace(/[\s\/\\\(\)\|\?\[\].,!\'@#~*=_+^%$&`*":\-;<>]+/g, ' ');

        //RULE: Replace County
        var replaceCounty = require('./replaceCounty');
        formated_address = replaceCounty(formated_address);

        // RULE: Replace shortcut
        var replaceShort = require('./replaceShort');
        formated_address = replaceShort(formated_address);

        //RULE : Seperate all nums+words terms
        // var seperateAlNum=require('./seperateAlNum');
        // if (/\b[0-9]+[A-Z]+\b/.test(formated_address)){
        //     formated_address= seperateAlNum(formated_address);
        // }

        //Note: still this one     
        //+ Remove long names
        //+ ST: Saint or Street
        //+ Remove: duplicate long terms

        //RULE: Formating: remove all single letters
        //formated_address=formated_address.replace(/\b[A-Z]\b/g,'');


        // RULE: D<num> for Dublin <num> not room before duplicates
        var removeD_num = require('./removeD_num');
        formated_address = removeD_num(formated_address);

        //RULE: Formating: remove all duplicate words standing together
        var removeGlobal = require('./removeGlobal');
        formated_address = removeGlobal(formated_address);

        // RULE: D<num> for Dublin <num> not room after duplicates
        formated_address = removeD_num(formated_address);

        //RULE: Formating: remove all duplicate words standing together after reduce D<num>
        formated_address = removeGlobal(formated_address);

        //RULE: Formating long names
        var long_names = require('./long_names');
        //formated_address=long_names(formated_address);

    }

    formated_address = formated_address.toUpperCase();
    return formated_address;
}

module.exports = format_address;