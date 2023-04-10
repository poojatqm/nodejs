var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",  
    user: "root",  
    password: "password",
    database:"all_data" 
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM employee WHERE id = '1'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});