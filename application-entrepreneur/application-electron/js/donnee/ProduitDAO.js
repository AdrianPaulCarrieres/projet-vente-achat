// const baseDeDonnees = require('./BaseDeDonneesMongoDB');
// const produit = require('../modele/Produit');

class ProduitDAO {

    constructor(){
        this.baseDeDonnees = new BaseDeDonneesMongoDB();
        this.collection = produit.COLLECTION;
    }

    listerProduitSelonCategorie(nomCategorie) {
        return this.baseDeDonnees.selectionnerDocumentsCollection('categorie', nomCategorie, this.collection);
    }

    listerProduit(champ, valeurChamp) {
        return this.creerProduitBidon();
        //return baseDeDonnees.selectionnerUnDocument(champ, valeurChamp, this.collection);
    }

    ajouterProduit(produitAjout) {
        this.baseDeDonnees.insererDocument(produitAjout, this.collection);
    }

    modifierProduit(champ, valeurChamp, produitModifie) {
        this.baseDeDonnees.modifierUnDocument(champ, valeurChamp, produitModifie, this.collection);
    }

    supprimerProduit(champ, valeurChamp) {
        this.baseDeDonnees.supprimerUnDocument(champ, valeurChamp, this.collection);
    }

    listerTousLesProduits() {
        /*var listeProduit = [];

        var n = Math.floor((Math.random() * 20) + 1);
        for(var x = 0; x < n; x++){
            listeProduit.push(this.creerProduitBidon);
        }

        return listeProduit;*/
        return this.baseDeDonnees.selectionnerDocumentsCollection(this.collection);
    }

    ajouterDesProduits(tableauDeProduits) {
        this.baseDeDonnees.insererTableauElement(tableauDeProduits, this.collection);
    }

    modifierDesProduits(champ, valeurChamp, produitModifie) {
        this.baseDeDonnees.modifierUnDocument(champ, valeurChamp, produitModifie, this.collection);
    }

    supprimerDesProduits(champ, valeurChamp) {
        this.baseDeDonnees.supprimerDesDocuments(champ, valeurChamp, this.collection);
    }

    creerProduitBidon() {
        var idProduit = Math.floor((Math.random() * 100) + 1);
        var nomProduit = "Produit bidon no. " + idProduit;
        var etiquette = "Description bidon no. " + idProduit;
        var categorie = Math.floor((Math.random() * 5) + 1);
        var prix = (Math.random() * 100) + 1;
        var marque = "ACME";
        var modele = "Modele " + idProduit;
        var cheminImage = "img/path"+idProduit+".png";
        var flagDisponibilite = true;

        var produit = new produit(
            idProduit, nomProduit, etiquette, 
            categorie, prix, marque, modele, 
            cheminImage, flagDisponibilite);
        
        return produit;
    }

    listerProduitTableauStatistiques = async function () {

        var client = this.baseDeDonnees.client();

        const c = await client.connect();

        const db = c.db(this.baseDeDonnees.dbName());

        var resultat = db.collection('achat').aggregate([

            { $lookup: { from: "produit", localField: "id_produit", foreignField: "id_produit", as: "produit" } },

            { $unwind: "$produit" },

            {
                $group: {
                    _id: "$produit",
                    prix_total: { $sum: "$produit.prix" },
                    prix_moyen: { $avg: "$produit.prix" },
                    nombre_produit: { $sum: 1 }
                }
            }

        ]).toArray();

        this.baseDeDonnees.fermer(client);

        return resultat;

    }

    valeurTotal = async function () {

        var client = this.baseDeDonnees.client();

        const c = await client.connect();

        const db = c.db(this.baseDeDonnees.dbName());

        var resultat = await db.collection('achat').aggregate([
            {
                $group: {
                    _id: 0,
                    prix_total: { $sum: "$prix" }
                }
            }

        ]).toArray();

        this.baseDeDonnees.fermer(client);

        var retour = resultat[0].prix_total

        return retour;
    }

    listerCategorieTableauStatistiques = async function () {

        var client = this.baseDeDonnees.client();

        const c = await client.connect();

        const db = c.db(this.baseDeDonnees.dbName());

        var resultat = db.collection('produit').aggregate([
            {
                $group: {
                    _id: "$categorie",
                    prix_total: { $sum: "$prix" },
                    prix_moyen: { $avg: "$prix" },
                    nombre_produit: { $sum: 1 }
                }
            }

        ]).toArray();

        this.baseDeDonnees.fermer(client);

        return resultat;

    }

    listerMoisTableauStatistiques = async function () {

        var client = this.baseDeDonnees.client();

        const c = await client.connect();

        const db = c.db(this.baseDeDonnees.dbName());

        var resultat = db.collection('achat').aggregate([

            { $lookup: { from: "produit", localField: "id_produit", foreignField: "id_produit", as: "produit" } },

            { $unwind: "$produit" },

            {
                $group: {
                    _id: "$mois_achat",
                    prix_total: { $sum: "$produit.prix" },
                    prix_moyen: { $avg: "$produit.prix" },
                    nombre_produit: { $sum: 1 }
                }
            }

        ]).toArray();

        this.baseDeDonnees.fermer(client);

        return resultat;

    }

}