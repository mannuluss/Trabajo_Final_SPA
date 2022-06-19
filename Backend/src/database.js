const mysql = require('mysql');
const fs = require("fs")
console.log(process.env.MYSQL_URI)
const conection = mysql.createConnection({
    host: process.env.MYSQL_URL || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PWD || 'toor',
    database: process.env.MYSQL_DB || 'trabajo_spa',
    ssl: (process.env.MYSQL_CRT ? { ca: fs.readFileSync(process.env.MYSQL_CRT_FILE) } : null)
});

conection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Database Conected SUCCESS');
    }
});

module.exports = conection;