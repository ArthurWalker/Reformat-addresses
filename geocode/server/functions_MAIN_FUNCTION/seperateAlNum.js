var seperateAlNum = function (address) {
    //     var list_char = address;
    //     if (list_char[0].match(/[0-9]/) != null) {
    //         ///console.log('       Check 1st char if it is num');
    //         return findMatch(list_char, '0');
    //     } else if (list_char[0].match(/[A-Z]/) != null) {
    //         // console.log('       Check 1st char if it is lett');
    //         return findMatch(list_char, 'A');
    //     }
    //     return list_char;
    // }

    // var findMatch = function (address, sample) {
    //     if (sample.match(/[0-9]/) != null) {
    //         var posi = address.search(/[A-Z]/);
    //         //console.log("       Check the possition of next letter: "+posi);
    //         if (posi != -1 && address[posi - 1].match(/\s/) != null) {
    //             //console.log("       Found space and next string: "+address.substring(posi,address.length));
    //             return address.substring(0, posi) + findMatch(address.substring(posi, address.length), 'A');
    //         } else if (posi != -1 && address[posi - 1].match(/\s/) == null) {
    //             //console.log("        Found no space and next string: "+address.substring(posi,address.length));
    //             return address.substring(0, posi) + " " + findMatch(address.substring(posi, address.length), 'A');
    //         } else {
    //             return address; s
    //         }
    //     } else if (sample.match(/[A-Z]/) != null) {
    //         var posi = address.search(/[0-9]/);
    //         //console.log("       Check the possition of next letter: "+posi);
    //         if (posi != -1 && address[posi - 1].match(/\s/) != null) {
    //             //console.log("Found space and next string: "+address.substring(posi,address.length));
    //             return address.substring(0, posi) + findMatch(address.substring(posi, address.length), '0');
    //         }
    //         else if (posi != -1 && address[posi - 1].match(/\s/) !== null) {
    //             //console.log("Found no space and next string: "+address.substring(posi,address.length));
    //             return address.substring(0, posi) + " " + findMatch(address.substring(posi, address.length), '0');
    //         } else {
    //             return address;
    //         }
    //     } else {
    //         return address;
    //     }
    while (/\b[0-9]+[A-Z]{4,}\b/.test(address)) {
        var posi = address.search(/\b[0-9]+[A-Z]{4,}\b/);
        var term = address.match(/\b[0-9]+[A-Z]{4,}\b/).join("");
        var num = term.search(/[A-Z]/);
        address=address.substring(0,posi+num)+" "+address.substring(posi+num,);
    }
    return address;
}




module.exports = seperateAlNum;