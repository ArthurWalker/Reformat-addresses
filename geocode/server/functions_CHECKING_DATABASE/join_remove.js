var join_remove = function(element){
    var address= element.ADDR_LINE_1+" "+element.ADDR_LINE_2+" "+element.ADDR_LINE_3+" "+element.ADDR_LINE_4+" "+element.ADDR_LINE_5+" "+element.ADDR_LINE_6+" "+element.ADDR_LINE_7+" "+element.ADDR_LINE_8+" "+element.ADDR_LINE_9+" "+element.ADDR_LINE_10;
    if (/\bnull\b/.test(address)){
        address = address.replace(/\b\snull\b/g,"");
    }
    var list_word= address.split(" ");
    address = list_word.slice(0,list_word.length-1).join(" ");
    return [element.BUILDING_ID,element.ADDRESS_POINT_ID,address];
}

module.exports = join_remove;