var count = require('../../globalVariable/count');
var dict_counties = require('../../globalVariable/dict_counties');
var checking_match = function (req, res) {
    console.log('Found match  => '+count.count_match);
    console.log('Found no match  =>'+count.count_no_match);
};

module.exports = checking_match;