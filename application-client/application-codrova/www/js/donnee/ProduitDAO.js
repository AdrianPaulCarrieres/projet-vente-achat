const baseDeDonnees = require('./BaseDeDonneesMongoDB');
const produit = require('../modele/Produit');

class ProduitDAO {

    constructor(){
        this.collection = produit.COLLECTION;
    }

    listerProduit(champ, valeurChamp) {
        return baseDeDonnees.selectionnerUnDocument(champ, valeurChamp, this.collection);
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
        return baseDeDonnees.selectionnerDocumentsCollection(this.collection);
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

}