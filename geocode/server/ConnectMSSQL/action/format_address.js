var format_address = function(address){
    var hasChar=/[0-9a-zA-Z].*/;
    var formated_address="";
    var unique_word_in_names={
    //var unique_word=[];
    };
    if (hasChar.test(address)){
        formated_address= address + ", Ireland";
        // Formating Dublin: DB,DL
        //formated_address=formated_address.replace(/\sDB/,' Dublin');
        //formated_address=formated_address.replace(/\sDL/,' Dublin');
        
        // Formating Street: ST., ST
        //formated_address=formated_address.replace(/\sST/,' Street');
        
        // Formating County: CO
        //formated_address=formated_address.replace(/\sCO\./,' County');
        
        // Foramting Cork: CK
        //formated_address=formated_address.replace(/\sCK/,' Dublin');
        
        // Formating Galway: GW
        //formated_address=formated_address.replace(/\sGW/,' Dublin');
        

        formated_address=formated_address.replace(/\s\s+/g,' ');
        
        
    }else{
        formated_address="No address";
    }
    formated_address=formated_address.trim();
    formated_address=formated_address.toUpperCase();
    //console.log(formated_address);
    return formated_address;
}

module.exports=format_address;