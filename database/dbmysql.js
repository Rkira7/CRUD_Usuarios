const mysql = require('mysql2')
require('dotenv').config()

//CONEXION A MYSQL
module.exports = () => {
    return mysql.createConnection({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    database: process.env.MYSQLBD,
    password: process.env.MYSQLPASS});
}
