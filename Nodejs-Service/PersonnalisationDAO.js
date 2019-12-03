const mysql = require('mysql');
var connexion = {
	  user: 'master', password: '',
	  host: '192.168.56.10', 
	  database: 'vente_achat'};

var bdd = mysql.createConnection(connexion);

exports.listerPerso = function()
{
	bdd.connect();
	console.log('connected');
	var queryString = 'SELECT * FROM personnalisation';
 
	bdd.query(queryString, function(err, rows, fields) {
		if (err) throw err;
	
		for (var i in rows) {
			console.log('Nom: ', rows[i].nom);
		}
	});

	bdd.end();
}

exports.detaillerPerso = async function(id)
{
	var basededonnees = new Pool(connexion);
	await basededonnees.connect();
	var curseur = await basededonnees.query("SELECT * FROM personnalisations WHERE id = " + id);
	var perso = curseur.rows[0];
	console.log(JSON.stringify(perso));
	await basededonnees.end();
	return JSON.stringify(perso);
}