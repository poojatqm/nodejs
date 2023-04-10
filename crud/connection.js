

var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",  
    user: "root",  
    password: "password",
    database:"all_data" 
});

module.exports = { con }