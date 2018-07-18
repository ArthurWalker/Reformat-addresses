var replaceShort = function (formated_address) {
    var list_county=['ANTRIM','ARMAGH','CARLOW','CAVAN','CLARE','CORK','DERRY','DONEGAL','DOWN','DUBLIN',
'FERMANAGH','GALWAY','KERRY','KILDARE','KILKANNY','LAOIS','LEITRIM','LIMERICK',
'LONGFORD','LOUTH','MAYO','MEATH','MONAGHAN','OFFALY','ROSCOMMON','SLIGO',
'TIPPERARY','TYRONE','WATERFORD','WESTMEATH','WEXFORD','WICKLOW'];
    var list_saint=['FINIANS','BRIGIDS','ASTON','WOLSTANS','SAMSON','JOHNS','ANDREWS','JUDES','CASHEL','COLUMBANUS','FRANCIS','JOHNSTON','HELENAS','BRIDGETS','RIOCHS','LAURENCES','ANGELAS','ALBANS','PETERS','MICHAELS','ANNS','MALO','GABRIELS','AUGUSTINE','JOSEPHS','JOHN','LISCORRIE','STEPHENS','MULLINS','AUGUSTINES','CATHERINES','KEVINS','ANNES','RAPHAELS','HELENS','LUKES','MARYS','JAMES','EDMUNDS','LAWRENCE','MARNOCKS','DONAGHS','PATRICKS','PATRICK','BRIGID','OLAVES','MARGARETS']
    // Replace: APT -> APARTMENT
    if (/\bAPT[0-9]+\b/.test(formated_address)) {
        var posi = formated_address.search(/\bAPT[0-9]+\b/);
        formated_address = formated_address.substring(0, posi + 1) + " " + formated_address.substring(posi + 1, );
    }
    formated_address = formated_address.replace(/\bAPT\b/g, 'APARTMENT');
    formated_address = formated_address.replace(/\bAPTS\b/g, 'APARTMENTS');

    // Replace: FL/FLR -> FLOOR
    if (/\b(FL)\b/.test(formated_address)||(/\bFLR\b/.test(formated_address))){
        formated_address = formated_address.replace(/\bFL\b/g, 'FLOOR');
        formated_address = formated_address.replace(/\bFLR\b/g, 'FLOOR');    
    }
    // Replace: RD -> ROADD
    formated_address = formated_address.replace(/\sRD\b/g, ' ROAD');

    // Replace: AVE -> AVENUE
    formated_address = formated_address.replace(/\sAVE\b/g, ' AVENUE');

    // Replace: ST -> SAINT
    if (formated_address.search(/\bST\b/)==0){
        formated_address=formated_address.replace(/\bST\b/,'SAINT');
    }
    if (/\bST\b/.test(formated_address) &&(/\bROAD\b/.test(formated_address)||/\bAVENUE\b/.test(formated_address)||/\bSTREET\b/.test(formated_address)||/\bLANE\b/.test(formated_address))){
        formated_address=formated_address.replace(/\sST\b/g,' SAINT');
    }
    if (/\b[0-9]+\sST\b/.test(formated_address)){
        var list_word = formated_address.split(" ");
        list_word[list_word.indexOf("ST")]="SAINT";
        formated_address=list_word.join(" ");
    }
    var list_word = formated_address.split(" "); 
    if (/\bST\b/.test(formated_address) && list_saint.indexOf(list_word[list_word.indexOf('ST')+1])!=-1){
        list_word[list_word.indexOf("ST")]="SAINT";
    }
    formated_address=list_word.join(" ");
    // Replace: ST -> Street
    var list_word = formated_address.split(" ");
    if (/\bST\b/.test(formated_address) && list_county.indexOf(list_word[list_word.lastIndexOf("ST")+1])!=-1){
        list_word[list_word.lastIndexOf("ST")]="STREET";
    }
    formated_address=list_word.join(" ");
    if (/\bMAIN\sST\b/.test(formated_address)){
        formated_address=formated_address.replace(/\bMAIN\sST\b/g,'MAIN STREET');
    }else if (/\bNEW\sST\b/.test(formated_address)){
        formated_address=formated_address.replace(/\bNEW\sST\b/g,'MAIN STREET');
    }else if (/\bHIGH\sST\b/.test(formated_address)){
        formated_address=formated_address.replace(/\bHIGH\sST\b/g,'MAIN STREET');
    }

    formated_address=formated_address.replace(/\bST\b/,'STREET');

    return formated_address;
}

module.exports = replaceShort;