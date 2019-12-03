const MongoClient = require('mongodb').MongoClient;

// TODO: A mettre a jour
const credentials = require('../../../credentials/CredentialsMongo');

const credentialsMongo = credentials.Credentials();

// Connection URL
// const url = 'mongodb://admin:password@localhost:27017?authMechanism=DEFAULT&authSource=admin&ssl=false"';
// Database Name
// const dbName = 'snowcool';

exports.url = function () {
    return credentialsMongo.url;
}


exports.dbName = function () {
    return credentialsMongo.dbName;
}

exports.client = function () {
    return new MongoClient(this.url());
}

exports.insererTableauElement = async function (tableauValeur, collection) {

    var client = this.client();

    const c = await client.connect();

    const db = c.db(this.dbName());
    await db.collection(collection).insertMany(tableauValeur);

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Inserer dans la base de données');

    // client.close();

}

exports.insererElement = async function (element, collection) {

    var client = this.client();

    const c = await client.connect();

    const db = c.db(this.dbName());
    await db.collection(collection).insertOne(element);

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Inserer dans la base de données');

    // client.close();

}

exports.selectionnerUnDocument = async function (clef, valeur, collection) {

    var client = this.client();
    const document = JSON.parse('{"' + clef + '":' + valeur + '}');

    const c = await client.connect();

    const db = c.db(this.dbName());
    var resultat = await db.collection(collection).findOne(document).toArray();

    return resultat;

}

exports.selectionnerDocumentsCollection = async function (collection) {

    var client = this.client();

    const c = await client.connect();

    const db = c.db(this.dbName());
    var resultat = await db.collection(collection).find({}).toArray();

    return resultat;

}