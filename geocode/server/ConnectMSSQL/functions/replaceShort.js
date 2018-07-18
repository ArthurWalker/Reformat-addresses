var replaceShort = function (formated_address) {

    // Replace: APT -> APARTMENT
    if (/\bAPT[0-9]+\b/.test(formated_address)) {
        var posi = formated_address.search(/\bAPT[0-9]+\b/);
        formated_address = formated_address.substring(0, posi + 1) + " " + formated_address.substring(posi + 1, );
    }
    formated_address = formated_address.replace(/\bAPT\b/g, 'APARTMENT');
    formated_address = formated_address.replace(/\bAPTS\b/g, 'APARTMENTS');

    // Replace: RD -> ROADD
    formated_address = formated_address.replace(/\sRD\b/g, ' ROAD');

    // Replace: AVE -> AVENUE
    formated_address = formated_address.replace(/\sAVE\b/g, ' AVENUE');

    // Replace: ST -> STREET
    //formated_address=formated_address.replace(/\sST\b/g,' STREET');

    return formated_address;
}

module.exports = replaceShort;