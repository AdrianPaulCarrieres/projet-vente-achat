const express = require('express')
const app = express()
const port = 3000
const connection = require('./helpers/connection');
const query = require('./helpers/query');


const path = require('path');
const fs = require('fs');

var connexion = {
    user: 'master',
    password: '',
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

app.get('/image/:id', async(req, res) => {
    const { id } = req.params;
    const conn = await connection(connexion).catch(e => {})



});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))