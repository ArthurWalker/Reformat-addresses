var replaceShort=function(formated_address){
    // Replace: ST -> STREET
    formated_address=formated_address.replace(/\sST\b/g,' STREET');
    // Replace: APT -> APARTMENT
    formated_address=formated_address.replace(/\bAPT\b/g,'APARTMENT');
    // Replace: APT -> RD
    formated_address=formated_address.replace(/\sRD\b/g,' ROAD');
    return formated_address; 
}

module.exports=replaceShort;