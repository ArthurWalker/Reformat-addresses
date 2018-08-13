var fs = require('fs');
var add_county_manually = function (mprn, list_word) {
    list_new_word.push('');
    var list_new_word = list_word;
    var address = list_word.join(" ");
    var list_dublin = [
        "50 VERSCHOYLE DRIVE SAGGART ABBEY",
        "141 WOODLAWN PARK GROVE FIRHOUSE",
        "10 BOTHAR RICHMOND DROMCHOMRACH",
        "LOCH BUI BAILE NUA UACHTAR RATHCHUIL",
        "ALLAGOUR BOHERNABREENA" ,
        "3 ORCHARD GROVE NEWCASTLE ROAD",
        "CUNARD TALLAGHT" ,
        "BALLYFOLAN BRITTAS" ,
        "RIVER ROAD CASTLEKNOCK",
        "19 HOMLEIGH PORTERSTOWN" ,
        "14 CHAPEL GATE BALBRIGGAN" ,
        "6 THE VALE SKERRIES ROCK" ,
        "42 THE VALE SKERRIES ROCK",
        "44 CUIRT NA TEAMHRACH BAILE BRIGIN",
        "TOBERTASKIN TOBERTOWN",
        "ASHPARK GARRISTOWN",
        "CUSHENSTOWN GARRISTOWN",
        "50 COLLEGE PARK",
        "53 COLLEGE PARK",
        "KNIGHTSTOWN LUSK",
        "9 CARRIGMORE ELMS FORTUNESTOWN LANE CITYWEST",
        "13A RIVERSIDE ROAD COOLOCK",
        "6 GLEBE HEIGHTS NEWCASTLE VILLAGE",
        "7 HOLYWELL HEIGHTS HOLYWELL FELTRIM ROAD",
        "1 THE COASTGUARD STATION TOWER BAY DONABATE",
        "5 MARLEY GROVE ROAD MALAHIDE",
        "8 ASPEN DRIVE KINSEALY COURT DRYNAM" ,
        "21 ORMOND CRESCENT SWORDS MANOR",
        "18 ORMOND GROVE SWORDS MANOR" ,
        "27 BERWICK WAY SWORDS MANOR" ,
        "30 ABBEYVALE WAY SWORDS MANOR" ,
        "13 THE PRIORY PORTRANE ROAD" ,
        "21 THE PRIORY PORTRANE ROAD" ,
        "COOLQUAY THE WARD",
        "COOLQUOY COMMON THE WARD",
        "COOLATRATH THE WARD",
        "KILSALLAGHAN NEWBARN" ,
        "522 HOWTH ROAD RAHENY",
        "8 BROOKLAWN MOUNT MERRION AVENUE",
        "15 BOTHAR GRAINSEACH AN DEIN",
        "48 ROCKFORD MANOR STRADBROOK ROAD",
        "43 KILL ABBEY KILL O THE GRANGE",
        "15 DIXONS VILLAS GLASTHULE",
        "SEAFORT HOUSE SANDYCOVE AVENUE NORTH",
        "35 GLENAGEARY WOODS",
        "66 BELFIELD PARK STILLORGAN ROAD",
        "19 COOLKILL SANDYFORD ROAD",
        "153 GLENAGEARY PARK",
        "9 KILGOBBIN AVENUE SANDYFORD HALL",
        "21 KILGOBBIN WALK SANDYFORD HALL",
        "83 BALLYOGAN ROAD CARRICKMINES",
        "11 STILLORGAN WOOD UPPER KILMACUD ROAD",
        "63 WHATELY PLACE UPPER KILMACUD ROAD",
        "13B BELFIELD COURT STILLORGAN ROAD",
        "9 ARDILEA WOOD CLONSKEAGH",
        "44 GRANGEFIELD RATHFARNHMAM",
        "RATHDUBH AN GHRIANACH",
    ];
    var list_kildare = [
        "PAIRC LEIM AN BHRADAIN 91 LEIM AN BHRADAIN",
        "7 BOTHAIR FORTBARRINGTON ATH I CHILL DARA",
        "AVALON ROSEBERRY COMMONS",
        "24 LANGTON PARK",
        "103 LANGTON PARK",
        "2122 HIGHFIELD ESTATE",
        "2158 HIGHFIELD ESTATE",
        "2162 HIGHFIELD ESTATE",
        "178 MOOREFIELD PARK",
        "238 MOOREFIELD PARK",
        "GREENGATES GR CONNELL ROAD",
        "1939 SAINT DOMINICKS PARK",
        "1957 CANNING PLACE",
        "78 MORRISTOWN",
        "107 MORRISTOWN ESTATE",
        "4 ALLENVIEW HEIGHTS",
        "1732 MCGUINNESS FIELD",
        "64 MOOREFIELD DRIVE",
        "MOOREFIELD ROAD",
        "CLOWNINGS",
        "WALSHESTOWN",
        "MORRISTOWN BILLER",
    ];
    var list_meath = [
        "MARYLAND ARDCATH GARRISTOWN",
        "BARTRAMSTOWN GARRISTOWN",
        "GLENVEAGH BAYTOWN THE WARD",
        "MEADSTOWN DUNDERRY ROBINSTOWN",
        "CILL BHRIGHDE BAILE ATHA TROIM",
    ];
    var list_cork = [
        "53 AN TARD BAILE AN EASPAIG",
        '22 RADHARC NA PAIRCE PASAISTE THIAR',
        "GLENCORRIG JOHNSTOWN GLEANNTAN",
        "CURRAITHE BEAL ATHA AN GHAORTHAI",
        "FAILTE AN GLEANN OILEAN CHLEIRE",
        "SHINANAGH BALLYHEA AN RATH",
        "OUTOFFICES KNOCKAWILLIN TULLYLEASE",
    ];

    var list_kerry = [
        "BAILE AN GLEANNA DUN CHAOIN",
        "AN CHILL DUNCHAOIN",
        "CILL MHIC CIARAIN ATAATUBRID CILL AIRNE",
        "BAILE INA BAIGHE CLOCHAN",
        "CATHAIRBUILLIG FIONN TRA",
    ];

    var list_limerick = [
        "5 NEW HOUSES CARROWARD W DROMCOLLGHR",
        "BOTHAR NUA ATH LEACACH CILL MOCHEALLOG",
    ];

    var list_tipperary = [        
        "NA GOIRT TUAIDHE BOTHAR FIODH ARD CLUAIN MEALA",
        "ROS AN TEAMPALL MOR TIOBRAID ARANN",
    ];

    var list_galway = [
        "AN BOTHAR ARD",
        "RINNHAIRNE CORRANDULLA",
        "COILL RUA THOIR INDREABAN",
        "TEACH MOR INVERIN",
        "31 PAIRC NA GCAOR MAIGH CUILLINN",
        "DOIRE AN FHIADH CASLA",
        "TIR NA CILLE AN MAM",
        "TUMNEENAUN CLONBUR",
        "ANACH MHEAIN BEALADANGAIN",
        "BEALADANGAN",
        "CAMUS UACHTAIR CAMUS",
        "COISATRAGHA CLADACH DUBH",
        "TEACH AN UDARAS CARNA",
        "CINN A BHAILE INIS MEAIN",
        "BAILE AN CHAISLEAN INIS OIRR ARAINN",
        "CARTRON CILL CHOLGAIN",
    ];

    var list_louth = [
        "BAILE PHILIB BR BAILE MHICCIONNAITH DROICHEAD ATHA",
        "15 SRUTHAN AN AIRGID STAMEEN DROICHEAD ATHA",
    ];

    var list_donegal = [
        "GARRAN MHOBAIG AN RABHAR",
        "MIN RIABHACH AN TEARMANN",
        "AN CLUMHAIRE BEAL AN ATHMOR LEIFEAR TIR CHONAILL",
        "MACHAIRE CHLOCHAIR AN BUN BEAG",
    ];

    var list_waterford = [
        "CNOC NA RI BOTHAR NA SAGAIRT AN TRA MHOR",
        "LOISCREAN AN SEAN PHOBAL DUNGARBHAN",
        "SEAN CHILL AN RINN DUNGARBHAIN",
        "RATH NA MBIRINNEACH AN RINN DUN GARBHAN",
    ];
    if (list_dublin.indexOf(address) >-1) {
        list_new_word.push('DUBLIN');
        
    // } else if (address == "39 ASCAL CALDERWOOD") {
    //     list_new_word.push('');

    // } else if (address == "23 ULLORD GORT AN IME") {
    //     list_new_word.push('');

    // } else if (address == "3 BOTHAR DUNODHAR") {
    //     list_new_word.push('');

    // } else if (address == "16 BEALACH AN TOCHAIR RATH FEARNAN") {
    //     list_new_word.push('');

    // } else if (address == "1 BAILTINI BELMONT") {
    //     list_new_word.push('');

    // } else if (address == "LAKE HOUSE BRITTAS") {
    //     list_new_word.push('');

    // } else if (address == "GLENARANEEN BRITTAS") {
    //     list_new_word.push('');

    // } else if (address == "ROSE COTTAGE RAHEEN BRITTAS") {
    //     list_new_word.push('');

    // } else if (address == "CROOKSLING BRITTAS") {
    //     list_new_word.push('');

    // } else if (address == "SLADEMORE BRITTAS") {
    //     list_new_word.push('');

    // } else if (address == "LISHEEN BRITTAS") {
    //     list_new_word.push('');

    } else if (list_kildare.indexOf(address) >-1) {
        list_new_word.push('KILDARE');

    // } else if (address == "BALLYDOWD MAIN LUCAN ROAD") {
    //     list_new_word.push('');

    // } else if (address == "11 ARD CHAISLEAN CHUCHA CAISLEAN CHUCHA") {
    //     list_new_word.push('');

    // } else if (address == "51 BULBHARD COIS BA THUA") {
    //     list_new_word.push('');

    } else if (list_meath.indexOf(address)>-1) {
        list_new_word.push('MEATH');
       
    // } else if (address == "RATHCARSTOWN CLONAIVY") {
    //     list_new_word.push('');

    // } else if (address == "BALRICKARD RING COMMONS") {
    //     list_new_word.push('');

    // } else if (address == "GRALLAGH OLDTOWN GARRISTOWN") {
    //     list_new_word.push('');

    // } else if (address == "THE GLEN PLUCKIMIN GARRISTOWN") {
    //     list_new_word.push('');

    // } else if (address == "BALLYMADUN GARRISTOWN") {
    //     list_new_word.push('');

    // }  else if (address == "WESTPALSTOWN AN SEANBHAILE") {
    //     list_new_word.push('');

    // } else if (address == "AN TEACH COISTE KILSALLAGHAN CASTLE") {
    //     list_new_word.push('');

    // } else if (address == "MABESTOWN THE WARD") {
    //     list_new_word.push('');
    //     // DUBLIN OR MEATH
    // } else if (address == "MABESTOWN THE WARD") {
    //     list_new_word.push('');

    // } else if (address == "59 BOTHAR AN DRUIM ALUINN") {
    //     list_new_word.push('');

    // } else if (address == "MELBURY FERNDALE ROAD RATHMICHAEL") {
    //     list_new_word.push('');
    //     // DUBLIN OR WICKLOW
    } else if (address == "9 RADHARC AN GHLEANN DEILGNE CHILL MHANTAIN") {
        address = address.replace(/\bCHILL\sMHANTAIN\b/, 'WICKLOW');
        list_new_word = address.split(" ");
    // }  else if (address == "19 ASCAL MERVILLE STIGH LORCAN") {
    //     list_new_word.push('');

    }  else if (list_cork.indexOf(address)>-1 ) {
        list_new_word.push('CORK');

    // } else if (address == "31 AN FHAICHE GHLAS BOTHAR CHIONN TSAILE") {
    //     list_new_word.push('');

    // } else if (address == "CUIL FLUICH TEAMHAIR AN BHLARNA") {
    //     list_new_word.push('');

    // } else if (address == "TEACH AN TSAGAIRT TEACH NAZARETH MALA") {
    //     list_new_word.push('');

    // } else if (address == "CARRAIG CHLIONA BUIRGEISE ROSSCAIRBRE") {
    //     list_new_word.push('');

    // } else if (address == "TEACH MHUIRE BAILE ATHA GHAORTHAIDH") {
    //     list_new_word.push('');
    //     // DUBLIN OR CORK
    // } else if (address == "OIFIG AN PHOIST BAILE CAISLEAN ROISTIG") {
    //     list_new_word.push('');

    // } else if (address == "BALLYORAN CAISLEAN UI LIATHAIN") {
    //     list_new_word.push('');

    // } else if (address == "CUIL AODHA MACROMTHA") {
    //     list_new_word.push('');

    // } else if (address == "BAILE UI DUIBHNE BREANAINN") {
    //     list_new_word.push('');

    } else if (list_kerry.indexOf(address) >-1) {
        list_new_word.push('KERRY');

    // }else if (address == "75 GAIRDINI BHAILE NA CORA") {
    //     list_new_word.push('');

    // } else if (address == "CAORTHANN BOTHAR AN MHUILINN BAILE NA GCLOCH") {
    //     list_new_word.push('');

    // } else if (address == "EIDHNEAGH") {
    //     list_new_word.push('');

    // } else if (address == "AN SEANBHOTH SRAID NA CATHRACH") {
    //     list_new_word.push('CLARE');

    } else if (list_limerick.indexOf(address)>-1) {
        list_new_word.push('LIMERICK');

    // } else if (address == "TARA BOTHAR AN CHIOSOGAIG INIS") {
    //     list_new_word.push('');

    // } else if (address == "CILL BHEATHACH CILL ROIS") {
    //     list_new_word.push('');

    // } else if (address == "ENAGH CILL CHISIN") {
    //     list_new_word.push('');

    // } else if (address == "ARDAN MHINNET CATHAIR CHINN LIS") {
    //     list_new_word.push('');

    } else if (list_tipperary.indexOf(address) >-1 ) {
        list_new_word.push('TIPPERARY');
    // }  else if (address == "AN DHITHREABH 1 ASCAL AN PHIARSAIGH RADHARC") {
    //     list_new_word.push('');

    } else if (address == "19 PEARSE AVENUE MERVUE GALWAY 19") {
        list_new_word = list_new_word.slice(0,list_new_word.length-1);

    } else if (list_galway.indexOf(address)>-1 ) {
        list_new_word.push('GALWAY');

    } else if (address == "LIOS DUBH CLUAIN NA GCLOE ROS COMAIN") {
        address = address.replace(/\bROS\sCOMAIN\b/,'ROSCOMMON');
        list_new_word = address.split(" ");

    // } else if (address == "ARDFINTAN ATHCINN") {
    //     list_new_word.push('');

    } else if (address == "18 ROYALOAK ROAD") {
        list_new_word.push('CARLOW');

    } else if (list_donegal.indexOf(address)>-1 ) {
        list_new_word.push('DONEGAL');

    // } else if (address == "TIGH AN CHEOIL RINN BAILE NA NGALL DUNGARBHAIN") {
    //     list_new_word.push('');

    }   else if (list_waterford.indexOf(address)>-1 ) {
        list_new_word.push('WATERFORD');

    // }  else if (address == "AN TSEAN CHILL RINN OGCUANACH") {
    //     list_new_word.push('');

    } else if (list_louth.indexOf(address)>-1 ) {
        list_new_word.push('LOUTH');
        
    // } else if (address == "DROIM BROGHA") {
    //     list_new_word.push('');

    } else if (address == "SRAID AN FHAITHCHE CIONN TORC") {
        list_new_word.push('WESTMEATH');

    // } else if (address == "STATION ROAD") {
    //     list_new_word.push('');
    //     // DUBLIN OR MEATH OR KILDARE
    // } else if (address == "EYRE STREET") {
    //     list_new_word.push('');
    //     //GALWAY OR KILDARE
    // } else if (address == "SAINT JUDES GREEN ROAD") {
    //     list_new_word.push('');

    // }  else if (address == "25 CEDARWOOD PARK") {
    //     list_new_word.push('');
    //     // DUBLIN OR KILDARE
    // } else if (address == "27 CEDARWOOD PARK") {
    //     list_new_word.push('');
    //     // DUBLIN OR KILDARE
    }  else if (address == "AN LEATHROS") {
        list_new_word.push('SLIGO');

    // } else if (address == "FORCAR BAILE NA GALLOGLA") {
    //     list_new_word.push('');

    } else if (address == "DERRYNAMEEL BARNATRA BALLLINA MAYO DERRYNAMEEL") {
        list_new_word = list_new_word.slice(0,list_new_word.length-1);

    // } else if (address == "KEERAUNNAGARK SOUTH BALLYNAHOWN") {
    //     list_new_word.push('');

    // } else if (address == "CURRAGH EAST CURRAGH HOUSE") {
    //     list_new_word.push('');
    //     // CORK OR GALWAY
    // } else if (address == "CAMUS CINN MHARA CONAMARA") {
    //     list_new_word.push('');

    } 
    return list_new_word;
}
module.exports = add_county_manually;