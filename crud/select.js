var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",  
    user: "root",  
    password: "password",
    database:"all_data" 
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM employee", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});