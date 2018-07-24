var sperateLet_Num = function (address) {
    var new_address = "";
    var posi = address.search(/[A-Z][0-9]/);
    new_address = address.substring(0, posi + 1) + " " + address.substring(posi + 1, );
    if (new_address.search(/[A-Z][0-9]/) != -1) {
        posi = new_address.search(/[A-Z][0-9]/);
        new_address = new_address.substring(0, posi + 1) + " " + new_address.substring(posi + 1, );
    }
    if (new_address.search(/[A-Z][0-9]/) != -1) {
        posi = new_address.search(/[A-Z][0-9]/);
        new_address = new_address.substring(0, posi + 1) + " " + new_address.substring(posi + 1, );
    }
    return new_address;
}

module.exports = sperateLet_Num;