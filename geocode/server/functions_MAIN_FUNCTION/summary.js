var summary = function (array_occurences) {
    var dict = {};
    var dict_characters = {};
    // // Put into a dictionary
    array_occurences.map((token, num) => {
        dict[num] = token;
        if (dict_characters[token[0].length] == undefined) {
            //dict_characters[token[0].length]=[];
            dict_characters[token[0].length] = {};
        }
        //dict_characters[token[0].length].push(token);
        // var sortable_dict_characters=[];
        // for( var word in dict_characters){
        //     sortable_dict_characters.push([word,dict_characters[word]]);
        // }
        dict_characters[token[0].length][token[0]] = token[1];
    });


    // return to array because CSV works well with array not Dictionary
    var sortable = [];
    for (var word in dict) {
        sortable.push([word, dict[word][0], dict[word][1]]);
    }


    return [sortable, dict_characters];
}

module.exports = summary;