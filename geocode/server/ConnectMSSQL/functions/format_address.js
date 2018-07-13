var format_address = function(address){
    var hasChar=/[0-9a-zA-Z].*/;
    var formated_address="";
    var unique_word_in_names={
    //var unique_word=[];
    };
    if (hasChar.test(address)){
        formated_address= address + ", Ireland";
        // Formating Dublin: DB,DL
        // formated_address=formated_address.replace(/\sDB/,' Dublin');
        // formated_address=formated_address.replace(/\sDL/,' Dublin');
        // // Formating Kilkenny: KK
        // formated_address=formated_address.replace(/\sKK/,' Kilkenny');
        // // Formating Kildare: KE
        // formated_address=formated_address.replace(/\sKE/,' Kildare');
        // // Formating Cork: CK
        // formated_address=formated_address.replace(/\sCK/,' Cork');
        // // Formating Galway: GW
        // formated_address=formated_address.replace(/\sGW/,' Galway');
        // // Formating Kerry: KY
        // formated_address=formated_address.replace(/\sKY/,' Kerry');
        // // Formating Mayo: MO
        // formated_address=formated_address.replace(/\sMO/,' Mayo');
        // // Formating Clare: CE
        // formated_address=formated_address.replace(/\sCE/,' Clare');
        // // Formating Wexford: WX
        // formated_address=formated_address.replace(/\sWX/,' Wexford');
        // // Formating Limerick: LK
        // formated_address=formated_address.replace(/\sLK/,' Limerick');
        // // Formating Offaly: OY
        // formated_address=formated_address.replace(/\sOY/,' Offaly');
        // // Formating Monaghan: MN
        // formated_address=formated_address.replace(/\sMN/,' Monaghan');
        // // Formating Louth: LH
        // formated_address=formated_address.replace(/\sLH/,' Louth');
        // // Formating Meath: MH
        // formated_address=formated_address.replace(/\sMH/,' Meath');
        // // Formating Cavan: CN
        // formated_address=formated_address.replace(/\sCN/,' Cavan');
        // // Formating Carlow: CW
        // formated_address=formated_address.replace(/\sCW/,' Carlow');
        // // Formating Wicklow: WW
        // formated_address=formated_address.replace(/\sWW/,' Wicklow');
        // // Formating Waterford: WD
        // formated_address=formated_address.replace(/\sWD/,' Waterford');
        // // Formating Longford: LD 
        // formated_address=formated_address.replace(/\sLD/,' Longford');
        // // Formating Sligo: SO
        // formated_address=formated_address.replace(/\sSO/,' Sligo');
        // // Formating Westmeath: WH
        // formated_address=formated_address.replace(/\sWH/,' Westmeath');
        // // Formating Antrim: AM
        // formated_address=formated_address.replace(/\sAM/,' Antrim');

        // // Formating CO -> County
        // formated_address=formated_address.replace(' CO ',' County');

        //Formating: replace . and big gap -> 1 space
        formated_address=formated_address.replace(/[\s\s/./,0-9]+/g,' ');
        
        
    }
    //else{
    //    formated_address="No address";
   // }
    formated_address=formated_address.trim();
    formated_address=formated_address.toUpperCase();
    return formated_address;
}

module.exports=format_address;