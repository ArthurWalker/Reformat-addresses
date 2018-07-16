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
        formated_address=formated_address.replace(/[\s\s\.\/\\,0-9\(\)\|\?\[\]!'@#~\*\+^%\$`:/\-;]+/g,' ');
        
        // Formating CO -> County
        formated_address=formated_address.replace(/\sCO\b/g,' County');
        // Formating Dublin: DB,DL
        //formated_address.split(' DB ').join(' Dublin ');
        formated_address=formated_address.replace(/\sDB\b/g,' Dublin ');
        formated_address=formated_address.replace(/\sDL\b/g,' Dublin ');
        // Formating Kilkenny: KK
        formated_address=formated_address.replace(/\sKK\b/g,' Kilkenny ');
        // Formating Kildare: KE
        formated_address=formated_address.replace(/\sKE\b/g,' Kildare ');
        // Formating Cork: CK
        formated_address=formated_address.replace(/\sCK\b/g,' Cork ');
        // Formating Galway: GW
        formated_address=formated_address.replace(/\sGW\b/g,' Galway ');
        // Formating Kerry: KY
        formated_address=formated_address.replace(/\sKY\b/g,' Kerry ');
        // Formating Mayo: MO
        formated_address=formated_address.replace(/\sMO\b/g,' Mayo ');
        // Formating Clare: CE
        formated_address=formated_address.replace(/\sCE\b/g,' Clare ');
        // Formating Down: DN
        formated_address=formated_address.replace(/\sDN\b/g,' Down ');
        // Formating Wexford: WX
        formated_address=formated_address.replace(/\sWX\b/g,' Wexford ');
        // Formating Limerick: LK
        formated_address=formated_address.replace(/\sLK\b/g,' Limerick ');
        // Formating Leitrim: LM
        formated_address=formated_address.replace(/\sLM\b/g,' Leitrim ');
        // Formating Laois: LS
        formated_address=formated_address.replace(/\sLS\b/g,' Laois ');
        // Formating Offaly: OY
        formated_address=formated_address.replace(/\sOY\b/g,' Offaly ');
        // Formating Monaghan: MN
        formated_address=formated_address.replace(/\sMN\b/g,' Monaghan ');
        // Formating Louth: LH
        formated_address=formated_address.replace(/\sLH\b/g,' Louth ');
        // Formating Meath: MH
        formated_address=formated_address.replace(/\sMH\b/g,' Meath ');
        // Formating Cavan: CN
        formated_address=formated_address.replace(/\sCN\b/g,' Cavan ');
        // Formating Carlow: CW
        formated_address=formated_address.replace(/\sCW\b/g,' Carlow ');
        // Formating Wicklow: WW
        formated_address=formated_address.replace(/\sWW\b/g,' Wicklow ');
        // Formating Waterford: WD
        formated_address=formated_address.replace(/\sWD\b/g,' Waterford ');
        // Formating Longford: LD 
        formated_address=formated_address.replace(/\sLD\b/g,' Longford ');
        // Formating Sligo: SO
        formated_address=formated_address.replace(/\sSO\b/g,' Sligo ');
        // Formating Westmeath: WH
        formated_address=formated_address.replace(/\sWH\b/g,' Westmeath ');
        // Formating Antrim: AM
        formated_address=formated_address.replace(/\sAM\b/g,' Antrim ');
        // Formating Roscommon: RN
        formated_address=formated_address.replace(/\sRN\b/g,' Roscommon ');
        // Formating Roscommon: TE
        formated_address=formated_address.replace(/\sTE\b/g,' Tyrone ');
        
    }
    //else{
    //    formated_address="No address";
   // }
    formated_address=formated_address.trim();
    formated_address=formated_address.toUpperCase();
    return formated_address;
}

module.exports=format_address;