var activiteDAO = require('./PersonnalisationDAO');
//activiteDAO.tester();

var http = require('http');

var repondeur = async function(requete,reponse)
{
	
	console.log('methode ' + requete.method);
	console.log('url ' + requete.url);
	var json = 'test';
	// {  "activites": { }}
	if(requete.method === 'GET')
	{
		switch(requete.url){
			case 
		}
	}

	reponse.statusCode = 200;
	reponse.setHeader('Content-type', 'text/plain');
	reponse.end(json);
}

var serveur = http.createServer(repondeur);
serveur.listen(8080, 'localhost', ()=>{console.log('Le serveur roule');});
