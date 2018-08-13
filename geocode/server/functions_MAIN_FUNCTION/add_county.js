var add_county = function (mprn,list_word) {
    var new_address;
    // add county
    if (list_word[list_word.length - 1].match(/\b[0-9]+\b/) && list_word[list_word.length - 2].match(/\bDUBLIN\b/)) {
        list_word.push('DUBLIN');
        new_address = list_word.join(" ");
    }
    else if (list_word[list_word.length - 1].match(/\b[0-9]+\b/) && /\bBAILE\sATHA\sCLIATH\b/.test(new_address)) {
        list_word.push('DUBLIN');
        new_address = list_word.join(" ");
    }
    else if (list_word[list_word.length - 1].match(/\b6W\b/)) {
        list_word.push('DUBLIN');
        new_address = list_word.join(" ");
    }
    else if (list_word[list_word.length - 2] == 'TRA' && list_word[list_word.length - 1] == 'LI') {
        list_word.push('KERRY');
        new_address = list_word.join(" ");
    }
    else if (list_word[list_word.length - 2] == 'NA' && list_word[list_word.length - 1] == 'MI') {
        new_address = list_word.join(" ");
        new_address = new_address.replace(/\bNA\sMI\b/, 'MEATH');
    }
    else if (list_word[list_word.length - 2] == 'MHAIGH' && list_word[list_word.length - 1] == 'EO') {
        new_address = list_word.join(" ");
        new_address = new_address.replace(/\bMHAIGH\sEO\b/, 'MAYO');
    } 
    if (list_word[list_word.length - 1].match(/\b[PO|RO]\b/)) {
        list_word.push('GALWAY');
        new_address = list_word.join(" ");
    } 
    // DUBLIN
    var word_dublin = ['STRADBROOK', 'STEPASIDE', 'SHANKILL', 'SANDYFORD', 'SANDYCOVE', 'PHIBBLESTOWN', 'OLDTOWN', 'NAUL', 'MONKSTOWN', 'MOUNT MERRION', 'MARGARETS', 'SWORDS MANOR', 'LOUGHSHINNY', 'LOUGHLINSTOWN', 'LEININ', 'KILTERNAN', 'KILSALLAGHAN', 'KILMACUD', 'SANDYFORD HALL', 'GROVE', 'GLENCULLEN', 'GLENAGEARY', 'FOXROCK', 'DONNYBROOK', 'SAGGART', 'PHIBBLESTOWN', 'BALROTHERY', 'BALLYBOUGHAL', 'BALLYBOUGHIL', 'BALLYBRACK', 'BOOTERSTOWN', 'CABINTEELY', 'CLOGHRAN', 'DEANSGRANGE', 'DHUBH'];
    if (word_dublin.indexOf(list_word[list_word.length - 1])>-1 || (list_word[list_word.length - 2] == 'MOUNT' && list_word[list_word.length - 1] == 'MERRION')) {
        list_word.push('DUBLIN');
        new_address = list_word.join(" ");
    }
    // replace dublin: BHAILE ATHA CLIATH
    else if (list_word[list_word.length - 3] == 'BHAILE' && list_word[list_word.length - 2] == 'ATHA' && list_word[list_word.length - 1] == 'CLIATH') {
        new_address = list_word.join(" ");
        new_address = new_address.replace(/\bBHAILE ATHA CLIATH\b/, 'DUBLIN');
    } 
    var word_carlow = ['BHEAG'];
    if (word_carlow.indexOf(list_word[list_word.length - 1])>-1) {
        list_word.push('CARLOW');
        new_address = list_word.join(" ");
    } 
    var word_donegal = ['CEANAINN', 'CHOIRCE', 'LEITIRCEANNAIN', 'LEITIRMEALLAIN'];
    if (word_donegal.indexOf(list_word[list_word.length - 1])>-1) {
        list_word.push('DONEGAL');
        new_address = list_word.join(" ");
    }
    //replace donegal: NA NGALL
    else if ((list_word[list_word.length - 2] == 'NA' && list_word[list_word.length - 1] == 'NGALL')) {
        new_address = list_word.join(" ");
        new_address = new_address.replace(/\bNA\sNGALL\b/, 'DONEGAL');
    } 
    var word_cork = ['CHROMTHA', 'CORCAIGH', 'BAILE MHUIRNE'];
    if (word_cork.indexOf(list_word[list_word.length - 1])>-1) {
        list_word.push('CORK');
        new_address = list_word.join(" ");
    }
    // replace cork: CHORCAI
    else if ((list_word[list_word.length - 1] == 'CHORCAI')) {
        list_word[list_word.length-1]='CORK';
        new_address = list_word.join(" ");
    } 
    var word_galway = ['SPIDEAL', 'RUA', 'MOR', 'CORNAMONA', 'INDREABHAIN', 'INDREABHAN', 'MAINISTIR', 'MHAOL', 'OIRR', 'ROSMUC'];
    if (word_galway.indexOf(list_word[list_word.length - 1])>-1) {
        list_word.push('GALWAY');
        new_address = list_word.join(" ");
    } 
    //replace galway: GAILLIMH   GAILLIMHE
    if ((list_word[list_word.length - 1] == 'GAILLIMH') || list_word[list_word.length - 1] == 'GAILLIMHE') {
        list_word[list_word.length-1]='GALWAY';
        new_address = list_word.join(" ");
    }
    var word_waterford = ['PORT LAIRGE','PHORT LAIRGE'];
    if (list_word[list_word.length - 2] == 'PORT' && list_word[list_word.length - 1] == 'LAIRGE') {
        new_address = list_word.join(" ");
        new_address = new_address.replace(/\bPORT\sLAIRGE\b/, 'WATERFORD');
    } else if (list_word[list_word.length - 2] == 'PHORT' && list_word[list_word.length - 1] == 'LAIRGE') {
        new_address = list_word.join(" ");
        new_address = new_address.replace(/\bPHORT\sLAIRGE\b/, 'WATERFORD');
    } 
    var word_kildare = ['PAIRC MHUIRE', 'NUA'];
    if (word_kildare.indexOf(list_word[list_word.length - 1])>-1 || (list_word[list_word.length - 2] == 'PAIRC' && list_word[list_word.length - 1] == 'MHUIRE')) {
        list_word.push('KILDARE');
        new_address = list_word.join(" ");
    } 
    var word_meath = ['UAIMH'];
    if (word_meath.indexOf(list_word[list_word.length - 1])>-1) {
        list_word.push('MEATH');
        new_address = list_word.join(" ");
    } 

    // MEATH
    if (list_word[list_word.length - 1] == 'MULHUDDART' && list_word[list_word.length - 2] == 'KILRUE') {
        list_word.push('MEATH');
        new_address = list_word.join(" ");
    }
    else if (list_word[list_word.length - 1] == 'MULHUDDART' && list_word[list_word.length - 2] != 'KILRUE') {
        list_word.push('DUBLIN');
        new_address = list_word.join(" ");
    }
    //replace county
    
    var dict_strange_county = require('../globalVariable/dict_strange_county');
    if (dict_strange_county.hasOwnProperty(list_word[list_word.length - 1])) {
        list_word[list_word.length - 1] = dict_strange_county[list_word[list_word.length - 1]];
        new_address = list_word.join(" ");
    }
    if (list_word.slice(list_word.length - 2, ).join(" ") == 'DERRY DE') {
        new_address = list_word.join(" ").replace(/\bDERRY\sDE\b/, '');
    }
    
    // var add_county_manually = require('./add_county_manually');
    // list_word=add_county_manually(mprn,list_word);
    new_address=list_word.join(" ");
    return [new_address, list_word];
}
module.exports = add_county;