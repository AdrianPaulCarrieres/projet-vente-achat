// const baseDeDonnees = require('./BaseDeDonneesMongoDB');

class CategorieDAO {
    
    constructor(){
        this.baseDeDonnees = new BaseDeDonneesMongoDB();
    }

    listerCategories() {
        return this.baseDeDonnees.selectionnerDocumentsCollection('categorie');
    }

}