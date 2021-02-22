const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'trabajo_spa'
});

conection.connect(function (err) {
    if (err){
        console.log(err);
        return;
    }else{
        console.log('Database Conected SUCCESS');
    }
});

module.exports = conection;