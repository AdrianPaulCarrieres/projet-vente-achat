const express = require('express')
const app = express()
const port = 3000
const connection = require('./helpers/connection');
const query = require('./helpers/query');

//Librairies pour servir les images
const path = require('path');
const fs = require('fs');

//Configuration du dossier où seront situées les dites images
var dir = path.join(__dirname, 'public');

var connexion = {
    user: 'postgres',
    password: 'mission',
    host: 'localhost',
    database: 'vente_achat'
};

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/persos', async(req, res) => {
    const conn = await connection(connexion).catch(e => {})
    const results = await query(conn, 'SELECT * FROM personnalisation').catch(console.log);
    res.json({ results });
})

app.get('/perso/:id', async(req, res) => {
    const { id } = req.params;
    const conn = await connection(connexion).catch(e => {})
    var requete = 'SELECT * FROM personnalisation WHERE id = ' + id;
    const results = await query(conn, requete).catch(console.log);
    res.json({ results });
});

app.get('/image/personnalisation/:id', async(req, res) => {
    const { id } = req.params;

    var file = path.join(dir, 'personnalisation\\' + id);
    var type = 'image/jpeg';

    console.log("path", file);

    var s = fs.createReadStream(file);
    s.on('open', function() {
        res.set('Content-Type', type);
        s.pipe(res);
    });
    s.on('error', function() {
        res.set('Content-Type', 'text/plain');
        res.status(404).end('Not found');
    });
});

app.get('/image/produit/:id', async(req, res) => {
    const { id } = req.params;

    var file = path.join(dir, 'produit\\produit' + id + ".jpg");
    var type = 'image/jpeg';

    console.log("path", file);

    var s = fs.createReadStream(file);
    s.on('open', function() {
        res.set('Content-Type', type);
        s.pipe(res);
    });
    s.on('error', function() {
        res.set('Content-Type', 'text/plain');
        res.status(404).end('Not found');
    });



});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))