var format_address = function(address){
    var hasChar=/[0-9a-zA-Z].*/;
    var formated_address="";
    var unique_word_in_names={
    //var unique_word=[];
    };
    if (hasChar.test(address)&& address != null){
        formated_address= address + ", Ireland";
        
        formated_address=formated_address.toUpperCase();
        //Formating: replace . and big gap -> 1 space
        
        formated_address=formated_address.replace(/\s[\s\s\/\\\(\)\|\?\[\]0-9.,!'@#~*=_+^%$&`*":\-;<>]+\s/g,' ');
        
        // Formating CO -> County and remove it
        formated_address=formated_address.replace(/\sCO\b/g,' COUNTY');
        formated_address=formated_address.replace(/\sCOUNTY\b/g,'');
        
        // Formating Dublin: DB,DL
        //formated_address.split(' DB ').join(' Dublin ');
        formated_address=formated_address.replace(/\sDB\b/g,' DUBLIN ');
        formated_address=formated_address.replace(/\sDL\b/g,' DUBLIN ');
        // Formating Kilkenny: KK
        formated_address=formated_address.replace(/\sKK\b/g,' KILKENNY ');
        // Formating Kildare: KE
        formated_address=formated_address.replace(/\sKE\b/g,' KILDARE ');
        // Formating Cork: CK
        formated_address=formated_address.replace(/\sCK\b/g,' CORK ');
        // Formating Galway: GW
        formated_address=formated_address.replace(/\sGW\b/g,' GALWAY ');
        // Formating Kerry: KY
        formated_address=formated_address.replace(/\sKY\b/g,' KERRY ');
        // Formating Mayo: MO
        formated_address=formated_address.replace(/\sMO\b/g,' MAYO ');
        // Formating Clare: CE
        formated_address=formated_address.replace(/\sCE\b/g,' CLARE ');
        // Formating Down: DN
        formated_address=formated_address.replace(/\sDN\b/g,' DOWN ');
        // Formating Wexford: WX
        formated_address=formated_address.replace(/\sWX\b/g,' WEXFORD ');
        // Formating Limerick: LK
        formated_address=formated_address.replace(/\sLK\b/g,' LIMERICK ');
        // Formating Leitrim: LM
        formated_address=formated_address.replace(/\sLM\b/g,' LEITRIM ');
        // Formating Laois: LS
        formated_address=formated_address.replace(/\sLS\b/g,' LAOIS ');
        // Formating Offaly: OY
        formated_address=formated_address.replace(/\sOY\b/g,' OFFALY ');
        // Formating Monaghan: MN
        formated_address=formated_address.replace(/\sMN\b/g,' MONAGHAN ');
        // Formating Louth: LH
        formated_address=formated_address.replace(/\sLH\b/g,' LOUTH ');
        // Formating Meath: MH
        formated_address=formated_address.replace(/\sMH\b/g,' MEATH ');
        // Formating Cavan: CN
        formated_address=formated_address.replace(/\sCN\b/g,' CAVAN ');
        // Formating Carlow: CW
        formated_address=formated_address.replace(/\sCW\b/g,' CARLOW ');
        // Formating Wicklow: WW
        formated_address=formated_address.replace(/\sWW\b/g,' WICKLOW ');
        // Formating Waterford: WD
        formated_address=formated_address.replace(/\sWD\b/g,' WATERFORD ');
        // Formating Longford: LD 
        formated_address=formated_address.replace(/\sLD\b/g,' LONGFORD ');
        // Formating Sligo: SO
        formated_address=formated_address.replace(/\sSO\b/g,' SLIGO ');
        // Formating Westmeath: WH
        formated_address=formated_address.replace(/\sWH\b/g,' WESTMEATH ');
        // Formating Antrim: AM
        formated_address=formated_address.replace(/\sAM\b/g,' ANTRIM ');
        // Formating Roscommon: RN
        formated_address=formated_address.replace(/\sRN\b/g,' ROSCOMMON ');
        // Formating Roscommon: TE
        formated_address=formated_address.replace(/\sTE\b/g,' TYRONE ');
        
    }
    //else{
    //    formated_address="No address";
   // }
    formated_address=formated_address.trim();
    formated_address=formated_address.toUpperCase();
    return formated_address;
}

module.exports=format_address;