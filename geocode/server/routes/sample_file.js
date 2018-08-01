var { poolPromise } = require('../database');
var readline = require('readline');
// FOr streaming
var matching_address = async function (req, res) {
    try {
        let pool = await poolPromise;
        // create request object
        let request = await pool.request();
        request.stream = true; // large data
        // query (MPRN address) to the database and get the records
        var query = 'select * from <table>';
        request.query(query);

        // Print out COLUMNS
        // request.on('recordset', columns => {
        //     console.log(columns);
        // });

        // Executing each row
        var progress_count = 0;
        request.on('row', (row) => {
           
        })
        // Executing error
        request.on('error', err => {
            // May be emitted multiple times
            console.log('error');
        });

        request.on('done', result => {
          
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = matching_address;