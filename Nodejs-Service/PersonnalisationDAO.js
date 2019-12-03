const {Pool} = require('pg');
var connexion = {
	  user: 'master', password: '123qweQWE',
	  host: '192.168.56.10', port: 5432,
	  database: 'vente_achat'};

exports.listerPerso = async function()
{
	var basededonnees = new Client(connexion);
	await basededonnees.connect();
	var curseur = await basededonnees.query("SELECT * FROM personnalisations");
	//console.log(curseur.rows);
	var position = 0; var listePersonnalisations = {};
	curseur.rows.forEach
	(
		perso => {listePersonnalisations[position++] = perso; }
	);
	console.log(JSON.stringify(listePersonnalisations));
	await basededonnees.end();
	return JSON.stringify(listePersonnalisations);
}

exports.detaillerPerso = async function(id)
{
	var basededonnees = new Client(connexion);
	await basededonnees.connect();
	var curseur = await basededonnees.query("SELECT * FROM personnalisations WHERE id = " + id);
	var perso = curseur.rows[0];
	console.log(JSON.stringify(perso));
	await basededonnees.end();
	return JSON.stringify(perso);
}