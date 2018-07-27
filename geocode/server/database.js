const sql = require('mssql');
const dbConfigOpenData = {
    user: 'OpenDataLogin',
    password: 'zHbF6cK8gzkCR6yKAnMF',
    server: '172.17.0.237', //SEAIREPORTSTG01
    database: 'OPEN_DATA',
    requestTimeout: 600000,
    connectionTimeout :600000,
    pool: {
        idleTimeoutMillis: 600000,
        max: 1000,
        min: 10,
        idle: 200000,
        acquire: 200000
    },
    retry:5,
};



const configGeoDirectory ={
    user: 'OpenDataLogin',
    password: 'zHbF6cK8gzkCR6yKAnMF',
    server: '172.17.0.237',
    database: 'GeoDirectory'
}

// Global connection pool
const poolPromise = new sql.ConnectionPool(dbConfigOpenData).connect().then(pool => {
    console.log(' ==> SUCCESSFUL: Connect to MSSQL');
    return pool;
}).catch(err =>{
    console.log(' ==> FAIL: Database Connection Failed !',err);
});



//module.exports={configGeoDirectory,dbConfigOpenData};
module.exports ={sql,poolPromise};

