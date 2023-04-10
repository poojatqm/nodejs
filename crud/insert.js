var mysql = require('mysql');  
// const con = require('./connection.js');
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "password",
  database:"all_data"  
});  

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO employee (firstname, lastname, email) VALUES ('first name', 'last name', 'email123')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
});