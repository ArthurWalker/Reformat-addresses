const sql = require('mssql');
const dbConfigOpenData = {
    user: 'OpenDataLogin',
    password: 'Frost2018!',
    server: '172.17.0.237', //SEAIREPORTSTG01
    database: 'OPEN_DATA',
    requestTimeout: 900000,
    connectionTimeout :900000,
    pool: {
        idleTimeoutMillis: 900000,
        max: 1000,
        min: 10,
    },
};

// Global connection pool
const poolPromise = new sql.ConnectionPool(dbConfigOpenData).connect().then(pool => {
    console.log(' ==> SUCCESSFUL: Connect to MSSQL');
    return pool;
}).catch(err =>{
    console.log(' ==> FAIL: Database Connection Failed !',err);
});


module.exports ={sql,poolPromise};