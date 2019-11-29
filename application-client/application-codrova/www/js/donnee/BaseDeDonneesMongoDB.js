const MongoClient = require('mongodb').MongoClient;

const credentials = require('../../../../../credentials/CredentialsMongo');

const credentialsMongo = credentials.Credentials();

// Connection URL
// const url = 'mongodb://localhost:27017';
// const url = 'mongodb://admin:password@localhost:27017?authMechanism=DEFAULT&authSource=admin&ssl=false"';

exports.url = function() {
    return credentialsMongo.url;
}

// Database Name
// const dbName = 'imr';

exports.dbName = function() {
    return credentialsMongo.dbName;
}

// Create a new MongoClient
// const client = new MongoClient(url);

exports.client = function() {
    return new MongoClient(this.url());
}

exports.insererTableau = async function(tableauValeur, collection) {

    var client = this.client();

    const c = await client.connect();

    const db = c.db(this.dbName());
    await db.collection(collection).insertMany(tableauValeur);

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Inserer dans la base de données');

    // client.close();

}

exports.insererUnDocument = async function(objetAInserer, collection) {

    var client = this.client();

    const c = await client.connect();

    const db = c.db(this.dbName());
    await db.collection(collection).insertOne(objetAInserer);

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Inserer dans la base de données');

}

exports.selectionnerUnDocumentSelonClefValeur = async function(clef, valeur, collection) {

    var client = this.client();
    const document = JSON.parse('{"' + clef + '":' + valeur + '}');

    const c = await client.connect();

    const db = c.db(this.dbName());
    var resultat = await db.collection(collection).findOne(document).toArray();
    // console.log('bdd :', resultat);

    return resultat;

}

exports.selectionnerDesDocumentsSelonClefValeur = async function (clef, valeur, collection) {

    var client = this.client();
    const document = JSON.parse('{"' + clef + '":' + valeur + '}');

    const c = await client.connect();

    const db = c.db(this.dbName());
    var resultat = await db.collection(collection).find(document).toArray();
    // console.log('bdd :', resultat);

    return resultat;

}

exports.selectionnerTousLesDocumentsCollection = async function(collection) {

    var client = this.client();

    const c = await client.connect();

    const db = c.db(this.dbName());
    var resultat = await db.collection(collection).find({}).toArray();

    return resultat;

}

//TODO: Update et Delete