var sql = require('mssql');
var dbConfigOpenData = {
    user: 'OpenDataLogin',
    password: 'zHbF6cK8gzkCR6yKAnMF',
    server: '172.17.0.237', //SEAIREPORTSTG01
    database: 'OPEN_DATA',
    requestTimeout: 600000,
    connectionTimeout :600000,
};


// Global connection pool
var poolPromise = new sql.ConnectionPool(dbConfigOpenData).connect().then(pool => {
    console.log(' ==> SUCCESSFUL: Connect to MSSQL');
    return pool;
}).catch(err =>{
    console.log(' ==> FAIL: Database Connection Failed !',err);
});

module.exports ={sql,poolPromise};