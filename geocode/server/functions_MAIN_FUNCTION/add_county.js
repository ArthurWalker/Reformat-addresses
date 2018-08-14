var add_county = function (mprn,list_word) {
    var new_address;
    //console.log(list_word);
    // add county
    var word_dublin = ['STRADBROOK', 'STEPASIDE', 'SHANKILL', 'SANDYFORD', 'SANDYCOVE', 'PHIBBLESTOWN', 'OLDTOWN', 'NAUL', 'MONKSTOWN', 'MOUNT MERRION', 'MARGARETS', 'SWORDS MANOR', 'LOUGHSHINNY', 'LOUGHLINSTOWN', 'LEININ', 'KILTERNAN', 'KILSALLAGHAN', 'KILMACUD', 'SANDYFORD HALL', 'GROVE', 'GLENCULLEN', 'GLENAGEARY', 'FOXROCK', 'DONNYBROOK', 'SAGGART', 'PHIBBLESTOWN', 'BALROTHERY', 'BALLYBOUGHAL', 'BALLYBOUGHIL', 'BALLYBRACK', 'BOOTERSTOWN', 'CABINTEELY', 'CLOGHRAN', 'DEANSGRANGE', 'DHUBH'];
    var word_carlow = ['BHEAG'];
    var word_donegal = ['CEANAINN', 'CHOIRCE', 'LEITIRCEANNAIN', 'LEITIRMEALLAIN'];
    var word_cork = ['CHROMTHA', 'CORCAIGH', ];
    var word_galway = ['SPIDEAL', 'RUA', 'MOR', 'CORNAMONA', 'INDREABHAIN', 'INDREABHAN', 'MAINISTIR', 'MHAOL', 'OIRR', 'ROSMUC'];
    var word_waterford = ['PORT LAIRGE','PHORT LAIRGE'];
    var word_kildare = ['PAIRC MHUIRE', 'NUA'];
    var word_meath = ['UAIMH'];
    var dict_strange_county = require('../globalVariable/dict_strange_county');
    
    if (list_word[list_word.length - 1].match(/\b[0-9]+\b/) && list_word[list_word.length - 2].match(/\bDUBLIN\b/)) {
        list_word.push('DUBLIN');
        new_address = list_word.join(" ");
    }
    else if (/\b[0-9]+\b/.test(list_word[list_word.length - 1]) && /\bBAILE\sATHA\sCLIATH\b/.test(list_word.join(" "))) {
        list_word.push('DUBLIN');
        new_address = list_word.join(" ");
    }
    else if (list_word[list_word.length - 1].match(/\b6W\b/)) {
        list_word.push('DUBLIN');
        new_address = list_word.join(" ");
    }
    else if (/\bTRA\sLI\b/.test(list_word.slice(list_word.length - 2,).join(" "))) {
        list_word.push('KERRY');
        new_address = list_word.join(" ");
    }
    else if (/\bNA\sMI\b/.test(list_word.slice(list_word.length - 2,).join(" "))) {
        new_address = list_word.join(" ");
        new_address = new_address.replace(/\bNA\sMI\b/, 'MEATH');
    }
    else if (/\bMHAIGH\sEO\b/.test(list_word.slice(list_word.length - 2,).join(" "))) {
        new_address = list_word.join(" ");
        new_address = new_address.replace(/\bMHAIGH\sEO\b/, 'MAYO');
    } 
    else if (/\b[PO|RO]\b/.test(list_word[list_word.length - 1])) {
        list_word.push('GALWAY');
        new_address = list_word.join(" ");
    } 
    // DUBLIN
    else if (word_dublin.indexOf(list_word[list_word.length - 1])>-1 || /\bMOUNT\sMERRION\b/.test(list_word.slice(list_word.length - 2,).join(" ")) || /\bSWORDS\sMANOR\b/.test(list_word.slice(list_word.length - 2,).join(" "))) {
        list_word.push('DUBLIN');
        new_address = list_word.join(" ");
    }
    // replace dublin: BHAILE ATHA CLIATH
    else if (/\bBHAILE\sATHA\sCLIATH\b/.test(list_word.slice(list_word.length - 3,).join(" "))) {
        new_address = list_word.join(" ");
        new_address = new_address.replace(/\bBHAILE\sATHA\sCLIATH\b/, 'DUBLIN');
    } 
   else if (word_carlow.indexOf(list_word[list_word.length - 1])>-1) {
        list_word.push('CARLOW');
        new_address = list_word.join(" ");
    } 
    else if (word_donegal.indexOf(list_word[list_word.length - 1])>-1) {
        list_word.push('DONEGAL');
        new_address = list_word.join(" ");
    }
    //replace donegal: NA NGALL
    else if (/\bNA\sNGALL\b/.test(list_word.slice(list_word.length - 2,).join(" "))) {
        new_address = list_word.join(" ");
        new_address = new_address.replace(/\bNA\sNGALL\b/, 'DONEGAL');
    } 
    else if (word_cork.indexOf(list_word[list_word.length - 1])>-1) {
        list_word.push('CORK');
        new_address = list_word.join(" ");
    }else if (/\bBAILE\sMHUIRNE\b/.test(list_word.slice(list_word.length-2,).join(" "))){
        list_word.push('CORK');
        new_address = list_word.join(" ");
    }
    // replace cork: CHORCAI
    else if ((/\bCHORCAI\b/.test(list_word[list_word.length - 1]))) {
        list_word[list_word.length-1]='CORK';
        new_address = list_word.join(" ");
    } 
    else if (word_galway.indexOf(list_word[list_word.length - 1])>-1) {
        list_word.push('GALWAY');
        new_address = list_word.join(" ");
    } 
    //replace galway: GAILLIMH   GAILLIMHE
    else if ((/\bGAILLIMH\b/.test(list_word[list_word.length - 1])) || /\bGAILLIMHE\b/.test(list_word[list_word.length - 1])) {
        list_word[list_word.length-1]='GALWAY';
        new_address = list_word.join(" ");
    }
    else if (/\bPORT\sLAIRGE\b/.test(list_word.slice(list_word.length - 2,).join(" "))) {
        new_address = list_word.join(" ");
        new_address = new_address.replace(/\bPORT\sLAIRGE\b/, 'WATERFORD');
    } else if (/\bPHORT\sLAIRGE\b/.test(list_word.slice(list_word.length - 2,).join(" "))) {
        new_address = list_word.join(" ");
        new_address = new_address.replace(/\bPHORT\sLAIRGE\b/, 'WATERFORD');
    } 
    else if (word_kildare.indexOf(list_word[list_word.length - 1])>-1 || (/\bPAIRC\sMHUIRE\b/.test(list_word.slice(list_word.length - 2,).join(" ")))) {
        list_word.push('KILDARE');
        new_address = list_word.join(" ");
    } 
    else if (word_meath.indexOf(list_word[list_word.length - 1])>-1) {
        list_word.push('MEATH');
        new_address = list_word.join(" ");
    } 

    // MEATH
    else if (/\bMULHUDDART\b/.test(list_word[list_word.length - 1]) && /\bKILRUE\b/.test(list_word[list_word.length - 2])) {
        list_word.push('MEATH');
        new_address = list_word.join(" ");
    }
    else if (/\bMULHUDDART\b/.test(list_word[list_word.length - 1]) && /\bKILRUE\b/.test(list_word[list_word.length - 2]) ==false) {
        list_word.push('DUBLIN');
        new_address = list_word.join(" ");
    }
    //replace county
    
    else if (dict_strange_county.hasOwnProperty(list_word[list_word.length - 1])) {
        list_word[list_word.length - 1] = dict_strange_county[list_word[list_word.length - 1]];
        new_address = list_word.join(" ");
    }
    else if (/\bDERRY\sDE\b/.test(list_word.slice(list_word.length - 2, ).join(" "))) {
        new_address = list_word.join(" ").replace(/\bDERRY\sDE\b/, '');
    }
    else{
        var add_county_manually = require('./add_county_manually');
        list_word=add_county_manually(mprn,list_word);
        new_address=list_word.join(" ");
    }
    
    return new_address;
}
module.exports = add_county;