var join_remove = function(element){
    var address= element.ADDRESS_LINE;
    if (/\bnull\b/.test(address)){
        address = address.replace(/\b\snull\b/g,"");
    }
    var list_word= address.split(" ");
    address = list_word.slice(0,list_word.length-1).join(" ");
    return [element.BUILDING_ID,element.ADDRESS_POINT_ID,address];
}

module.exports = join_remove;