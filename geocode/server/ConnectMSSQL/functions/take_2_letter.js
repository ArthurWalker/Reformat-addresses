var take_2_letter = function(word_dictionary){
    var dict = {};
    Object.keys(word_dictionary).forEach(function(key) {
        if (/[A-Z]{2}/.test(key) && key.length==2){
            dict[key] = word_dictionary[key];
        }
    });
    var sortable=[];
    for( var word in dict){
        sortable.push([word,dict[word]]);
    }

    sortable.sort(function(a,b){
        return b[1]-a[1];
    });
    
    return [sortable,dict];
}

module.exports=take_2_letter;