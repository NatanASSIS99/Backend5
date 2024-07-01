// db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'localhost',                
    user: 'natan',                      
    password: 'root',                   
    database: 'desafio'                 
});

module.exports = pool;
