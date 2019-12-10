const baseDeDonnees = require('./BaseDeDonneesMongoDB');
const produit = require('../modele/Produit');

class ProduitDAO {

    constructor(){
        this.collection = produit.COLLECTION;
    }

    listerProduitSelonCategorie(nomCategorie) {
        return baseDeDonnees.selectionnerDocumentsCollection('categorie', nomCategorie, this.collection);
    }

    listerProduit(champ, valeurChamp) {
        return this.creerProduitBidon();
        //return baseDeDonnees.selectionnerUnDocument(champ, valeurChamp, this.collection);
    }

    ajouterProduit(produitAjout) {
        baseDeDonnees.insererDocument(produitAjout, this.collection);
    }

    modifierProduit(champ, valeurChamp, produitModifie) {
        baseDeDonnees.modifierUnDocument(champ, valeurChamp, produitModifie, this.collection);
    }

    supprimerProduit(champ, valeurChamp) {
        baseDeDonnees.supprimerUnDocument(champ, valeurChamp, this.collection);
    }

    listerTousLesProduits() {
        var listeProduit = [];

        var n = Math.floor((Math.random() * 20) + 1);
        for(var x = 0; x < n; x++){
            listeProduit.push(this.creerProduitBidon);
        }

        return listeProduit;
        //return baseDeDonnees.selectionnerDocumentsCollection(this.collection);
    }

    ajouterDesProduits(tableauDeProduits) {
        baseDeDonnees.insererTableauElement(tableauDeProduits, this.collection);
    }

    modifierDesProduits(champ, valeurChamp, produitModifie) {
        baseDeDonnees.modifierUnDocument(champ, valeurChamp, produitModifie, this.collection);
    }

    supprimerDesProduits(champ, valeurChamp) {
        baseDeDonnees.supprimerDesDocuments(champ, valeurChamp, this.collection);
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

}