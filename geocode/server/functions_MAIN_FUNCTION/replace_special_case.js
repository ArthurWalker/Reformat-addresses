var replace_special_case = function (formated_address) {
    //formated_address =formated_address.replace('','');
    formated_address = formated_address.replace(/\bDN3\b/g, 'DUBLIN 3');
    formated_address = formated_address.replace(/\b\s305 ORWELL PARK GROVE DUBLIN 6W\b/g, '');
    formated_address = formated_address.replace(/\bHTS\b/g, 'HEIGHTS');
    formated_address = formated_address.replace(/\bBANDOC\b/g, 'BANDON');
    formated_address = formated_address.replace(/\bCOLAGE\b/g, 'COLLAGE');
    formated_address = formated_address.replace(/\bTIPPEARARY\b/g, 'TIPPERARY');
    formated_address = formated_address.replace(/\bCRACAWEELCROSS\b/g, 'CRAGAWEELCROSS');
    formated_address = formated_address.replace(/\bCALRE\b/g, 'CLARE');
    formated_address = formated_address.replace(/\bCLAUIN\b/g, 'CLUAIN');
    formated_address = formated_address.replace(/\bCOMAYO\b/g, 'MAYO');
    formated_address = formated_address.replace(/\bWESFORD\b/g, 'WEXFORD');
    formated_address = formated_address.replace(/\bWEXFOD\b/g, 'WEXFORD');
    formated_address = formated_address.replace(/\bKILCAVANCO\b/g, 'KILCAVAN');
    formated_address = formated_address.replace(/\bWICLOW\b/g, 'WICKLOW');
    // formated_address =formated_address.replace(/\b\b/g,'');
    // formated_address =formated_address.replace(/\b\b/g,'');
    // formated_address =formated_address.replace(/\b\b/g,'');
    // formated_address =formated_address.replace(/\b\b/g,'');
    // formated_address =formated_address.replace(/\b\b/g,'');
    // formated_address =formated_address.replace(/\b\b/g,'');
    
    formated_address=formated_address.split('  ').join(' ');
    return formated_address;
}

module.exports = replace_special_case;