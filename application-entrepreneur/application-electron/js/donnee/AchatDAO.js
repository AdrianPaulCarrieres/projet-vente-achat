// const this.baseDeDonnees = require('./this.baseDeDonneesMongoDB');
// const achat = require('../modele/Achat');

class AchatDAO {

    constructor() {
        this.baseDeDonnees = new this.BaseDeDonneeMongo();
        this.collection = achat.COLLECTION;
    }

    listerAchat(champ, valeurChamp) {
        return this.baseDeDonnees.selectionnerUnDocument(champ, valeurChamp, this.collection);
    }

    ajouterAchat(achatAjout) {
        this.baseDeDonnees.insererDocument(achatAjout, this.collection);
    }

    modifierAchat(champ, valeurChamp, achatModifie) {
        this.baseDeDonnees.modifierUnDocument(champ, valeurChamp, achatModifie, this.collection);
    }

    supprimerAchat(champ, valeurChamp) {
        this.baseDeDonnees.supprimerUnDocument(champ, valeurChamp, this.collection);
    }

    listerTousLesAchats() {
        return this.baseDeDonnees.selectionnerDocumentsCollection(this.collection);
    }

    ajouterDesAchats(tableauAchats) {
        this.baseDeDonnees.insererTableauElement(tableauDeAchats, this.collection);
    }

    modifierDesAchats(champ, valeurChamp, achatModifie) {
        this.baseDeDonnees.modifierUnDocument(champ, valeurChamp, achatModifie, this.collection);
    }

    supprimerDesAchats(champ, valeurChamp) {
        this.baseDeDonnees.supprimerDesDocuments(champ, valeurChamp, this.collection);
    }

}