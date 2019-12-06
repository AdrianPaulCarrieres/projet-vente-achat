const mysql = require('mysql');

var connexion = {
	  user: 'master', password: '',
	  host: 'localhost', 
      database: 'vente_achat'};
      
const con = mysql.createConnection(connexion);
      
const query = 'SELECT * FROM personnalisation';

con.connect(function(err) {
    if (err) throw err;
  
    // if connection is successful
    con.query(query, (err, result, fields) => {
      // if any error while executing above query, throw error
      if (err) throw err;
  
      // if there is no error, you have the result
      console.log(result);
   });
  });