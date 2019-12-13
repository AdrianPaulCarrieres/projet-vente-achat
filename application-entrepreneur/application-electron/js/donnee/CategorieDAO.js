// const baseDeDonnees = require('./BaseDeDonneesMongoDB');

class CategorieDAO {
    
    constructor(){
        this.baseDeDonnees = new BaseDeDonneeMongo();
    }

    listerCategories() {
        return this.baseDeDonnees.selectionnerDocumentsCollection('categorie');
    }

}