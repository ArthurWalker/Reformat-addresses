var removeD_num = function (formated_address) {
    var list_word = formated_address.split(" ");
    if (/\bD[0-9]+\b/.test(list_word[list_word.length - 1])) {
        list_word[list_word.length - 1] = "DUBLIN " + list_word[list_word.length - 1].substring(1, );
    } else if (/\bD[0-9]+\b/.test(list_word[list_word.length - 2]) && /\bDUBLIN\b/.test(list_word.slice(list_word.length - 1, ).join(" "))) {
        list_word[list_word.length - 2] = "DUBLIN " + list_word[list_word.length - 2].substring(1, );
    } else if (/\bD[0-9]+\b/.test(list_word[list_word.length - 3]) && /\bDUBLIN\b/.test(list_word.slice(list_word.length - 2, ).join(" "))) {
        list_word[list_word.length - 3] = "DUBLIN " + list_word[list_word.length - 3].substring(1, );
    }
    formated_address=list_word.join(" ");
    return formated_address;
}

module.exports = removeD_num;