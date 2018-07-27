var { poolPromise } = require('../database');
var readline = require('readline');

var update_table = async function (new_address) {
    try {
        let pool = await poolPromise;
        var query = "update PP_Formated_MPRN_Address set New_MPRN_Address = '" + new_address[2] + "' where MPRN = '" + new_address[0] + "';";
        return pool.request().query(query)
            .then(results => {
                readline.clearLine(process.stdout, 0);
                readline.cursorTo(process.stdout, 0);
                process.stdout.write(new_address[0] + " is updated");
            }).catch(err => {
                console.log(new_address[0] + " failed to update");
                console.log(err);
            });
    } catch (err) {
        console.log(err);
    }
}
module.exports = update_table;