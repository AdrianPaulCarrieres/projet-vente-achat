const baseDeDonnees = require('./BaseDeDonneesMongoDB');

class CategorieDAO {
    
    constructor(){}

    listerCategories() {
        return baseDeDonnees.selectionnerDocumentsCollection('categorie');
    }

}