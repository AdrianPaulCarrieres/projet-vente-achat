const MongoClient = require('mongodb').MongoClient;

// const credentials = require('../../../../../credentials/Credentials');

const credentialsMongo = new Credentials();

class BaseDeDonneeMongo {

    url = function () {
        return credentialsMongo.url;
    }

    dbName = function () {
        return credentialsMongo.dbName;
    }

    client = function () {
        return new MongoClient(this.url());
    }

    fermer = function (client) {
        client.close();
    }

    async insererTableauElement(tableauValeur, collection) {

        var client = this.client();

        const c = await client.connect();

        const db = c.db(this.dbName());
        await db.collection(collection).insertMany(tableauValeur);

        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Inserer dans la base de données');

        this.fermer(client);
        // client.close();

    }

    async insererDocument(element, collection) {

        var client = this.client();

        const c = await client.connect();

        const db = c.db(this.dbName());
        await db.collection(collection).insertOne(element);

        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Inserer dans la base de données');

        this.fermer(client);
        // client.close();

    }

    async selectionnerUnDocument(clef, valeur, collection) {

        var client = this.client();
        const document = JSON.parse('{"' + clef + '":' + valeur + '}');

        const c = await client.connect();

        const db = c.db(this.dbName());
        var resultat = await db.collection(collection).find(document).toArray();

        this.fermer(client);

        return resultat;

    }

    async selectionnerDocumentsSelonUnParametre(clef, valeur, collection) {

        var client = this.client();
        const document = JSON.parse('{"' + clef + '":' + valeur + '}');

        const c = await client.connect();

        const db = c.db(this.dbName());
        var resultat = await db.collection(collection).find(document).toArray();

        this.fermer(client);

        return resultat;

    }

    async selectionnerDocumentsCollection(collection) {

        var client = this.client();

        const c = await client.connect();

        const db = c.db(this.dbName());
        var resultat = await db.collection(collection).find({}).toArray();

        this.fermer(client);

        return resultat;

    }

    async modifierUnDocument(clef, valeur, nouveauDocument, collection) {

        var client = this.client();
        const document = JSON.parse('{"' + clef + '":' + valeur + '}');

        const c = await client.connect();

        const db = c.db(this.dbName());

        await db.collection(collection).updateOne(document, { $set: nouveauDocument });

        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Document modifié');

        this.fermer(client);

    }

    async modifierDesDocuments(clef, valeur, nouveauDocument, collection) {

        var client = this.client();
        const document = JSON.parse('{"' + clef + '":' + valeur + '}');

        const c = await client.connect();

        const db = c.db(this.dbName());

        await db.collection(collection).updateMany(document, { $set: nouveauDocument });

        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Documents modifiés');

        this.fermer(client);

    }


    async supprimerUnDocument(clef, valeur, collection) {

        var client = this.client();
        const document = JSON.parse('{"' + clef + '":' + valeur + '}');

        const c = await client.connect();

        const db = c.db(this.dbName());

        await db.collection(collection).deleteOne(document);

        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Document supprimé');

        this.fermer(client);

    }

    async supprimerDesDocuments(clef, valeur, collection) {

        var client = this.client();
        const document = JSON.parse('{"' + clef + '":' + valeur + '}');

        const c = await client.connect();

        const db = c.db(this.dbName());

        await db.collection(collection).deleteMany(document);

        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Documents supprimés');

        this.fermer(client);

    }


}


