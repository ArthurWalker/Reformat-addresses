var count_unique_part = function (addresses) {
    addresses = addresses.trim();
    addresses = addresses.replace(/\s\s+/g, ' ');
    var list_addresses = addresses.split(" ");
    var map_list = list_addresses.reduce((a, b) => a.set(b, a.get(b) + 1 || 1), new Map);
    //console.log(map_list.get('56'));
    //console.log([map_list].sort((a,b)=> a[1]===b[1]?0:a[1] > b[1]? 1:-1));


    // Because dictionary in Python is Object in Javascript and it cant be ordered so must put in array to sort
    var dict = {};
    for (var [key, value] of (map_list)) {
        dict[key] = value;
        //console.log(key, value);
    }

    var sortable = [];
    for (var word in dict) {
        sortable.push([word, dict[word]]);
    }

    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });

    return [sortable, dict];
    // 2nd way to return 2 results at once
    //return {
    //    dict:dict,
    //    sortable:sortable
    //}
};

module.exports = count_unique_part;