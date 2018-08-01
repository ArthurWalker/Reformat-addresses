var format_address = function(address){
    var list_word = address[0].split(' ');
    if (list_word[list_word.length-1]=='DUBLIN'){
        list_word=list_word.slice(0,list_word.length-1);
    }
    return list_word.join(" ");
}

module.exports=format_address;