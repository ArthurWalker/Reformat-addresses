var dict_counties = require('../../globalVariable/dict_counties');
var matching_address = async function (req, res) {
    // go through each county
    try {
        await Object.keys(dict_counties).map(async function (key) {
            // go through each address inside county
            try {
                await Object.keys(dict_counties[key]).map(async function (k) {
                    try {
                        // execute each address
                        // reformat 
                        if (dict_counties[key][k] != "") {
                            var format_address = require('../functions_MATCHING_ADDRESS/format_address');
                            var new_address = format_address(dict_counties[key][k]);
                            var find_match = require('../functions_MATCHING_ADDRESS/find_match');
                            await find_match(k, key, new_address);
                        }
                    } catch (err) {
                        console.log(err);
                    }
                });
            } catch (err) {
                console.log(err);
            }
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = matching_address;