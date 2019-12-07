const baseDeDonnees = require('./BaseDeDonneesMongoDB');
const achat = require('../modele/Achat');

class AchatDAO {

    constructor() {
        this.collection = achat.COLLECTION;
    }

    listerAchat(champ, valeurChamp) {
        return baseDeDonnees.selectionnerUnDocument(champ, valeurChamp, this.collection);
    }

    ajouterAchat(achatAjout) {
        baseDeDonnees.insererDocument(achatAjout, this.collection);
    }

    modifierAchat(champ, valeurChamp, achatModifie) {
        baseDeDonnees.modifierUnDocument(champ, valeurChamp, achatModifie, this.collection);
    }

    supprimerAchat(champ, valeurChamp) {
        baseDeDonnees.supprimerUnDocument(champ, valeurChamp, this.collection);
    }

    listerTousLesAchats() {
        return baseDeDonnees.selectionnerDocumentsCollection(this.collection);
    }

    ajouterDesAchats(tableauAchats) {
        baseDeDonnees.insererTableauElement(tableauDeAchats, this.collection);
    }

    modifierDesAchats(champ, valeurChamp, achatModifie) {
        baseDeDonnees.modifierUnDocument(champ, valeurChamp, achatModifie, this.collection);
    }

    supprimerDesAchats(champ, valeurChamp) {
        baseDeDonnees.supprimerDesDocuments(champ, valeurChamp, this.collection);
    }

}