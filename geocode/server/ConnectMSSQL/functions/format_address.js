var format_address = function(address){
    var hasChar=/[0-9a-zA-Z].*/;
    var formated_address="";
    var unique_word_in_names={
    //var unique_word=[];
    };
    if (hasChar.test(address)){
        formated_address= address + ", Ireland";
        
        formated_address=formated_address.toUpperCase();
        //Formating: replace . and big gap -> 1 space
        formated_address=formated_address.replace(/[\s\s\.\/\\,0-9\(\)\|\?\[\]!'@#~\*\+^%\$`:/\-]+/g,' ');
        
        // Formating CO -> County
        formated_address=formated_address.replace(/\sCO\s/g,' County ');

        // Formating Dublin: DB,DL
        //formated_address.split(' DB ').join(' Dublin ');
        formated_address=formated_address.replace(/\sDB\s/g,' Dublin ');
        formated_address=formated_address.replace(/\sDL\s/g,' Dublin ');
        // Formating Kilkenny: KK
        formated_address=formated_address.replace(/\sKK\s/g,' Kilkenny ');
        // Formating Kildare: KE
        formated_address=formated_address.replace(/\sKE\s/g,' Kildare ');
        // Formating Cork: CK
        formated_address=formated_address.replace(/\sCK\s/g,' Cork ');
        // Formating Galway: GW
        formated_address=formated_address.replace(/\sGW\s/g,' Galway ');
        // Formating Kerry: KY
        formated_address=formated_address.replace(/\sKY\s/g,' Kerry ');
        // Formating Mayo: MO
        formated_address=formated_address.replace(/\sMO\s/g,' Mayo ');//1
        // Formating Clare: CE
        formated_address=formated_address.replace(/\sCE\s/g,' Clare ');
        // Formating Down: DN
        formated_address=formated_address.replace(/\sDN\s/g,' Down ');
        // Formating Wexford: WX
        formated_address=formated_address.replace(/\sWX\s/g,' Wexford ');
        // Formating Limerick: LK
        formated_address=formated_address.replace(/\sLK\s/g,' Limerick ');
        // Formating Leitrim: LM
        formated_address=formated_address.replace(/\sLM\s/g,' Leitrim ');
        // Formating Laois: LS
        formated_address=formated_address.replace(/\sLS\s/g,' Laois ');
        // Formating Offaly: OY
        formated_address=formated_address.replace(/\sOY\s/g,' Offaly ');
        // Formating Monaghan: MN
        formated_address=formated_address.replace(/\sMN\s/g,' Monaghan ');
        // Formating Louth: LH
        formated_address=formated_address.replace(/\sLH\s/g,' Louth ');
        // Formating Meath: MH
        formated_address=formated_address.replace(/\sMH\s/g,' Meath ');
        // Formating Cavan: CN
        formated_address=formated_address.replace(/\sCN\s/g,' Cavan ');
        // Formating Carlow: CW
        formated_address=formated_address.replace(/\sCW\s/g,' Carlow ');
        // Formating Wicklow: WW
        formated_address=formated_address.replace(/\sWW\s/g,' Wicklow ');
        // Formating Waterford: WD
        formated_address=formated_address.replace(/\sWD\s/g,' Waterford ');
        // Formating Longford: LD 
        formated_address=formated_address.replace(/\sLD\s/g,' Longford ');//1
        // Formating Sligo: SO
        formated_address=formated_address.replace(/\sSO\s/g,' Sligo ');
        // Formating Westmeath: WH
        formated_address=formated_address.replace(/\sWH\s/g,' Westmeath ');
        // Formating Antrim: AM
        formated_address=formated_address.replace(/\sAM\s/g,' Antrim ');//1
        // Formating Roscommon: RN
        formated_address=formated_address.replace(/\sRN\s/g,' Roscommon ');
        // Formating Roscommon: TE
        formated_address=formated_address.replace(/\sTE\s/g,' Tyrone ');//1
        if (formated_address.includes(' TE ')){
            formated_address=formated_address.split('TE').join('');
        }
        
    }
    //else{
    //    formated_address="No address";
   // }
    formated_address=formated_address.trim();
    formated_address=formated_address.toUpperCase();
    return formated_address;
}

module.exports=format_address;