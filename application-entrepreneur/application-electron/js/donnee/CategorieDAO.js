// const baseDeDonnees = require('./BaseDeDonneesMongoDB');
const database = firebase.database();
const categorieReference = database.ref('categorie');

class CategorieDAO {
    
    constructor(){
        this.baseDeDonnees = new BaseDeDonneeMongo();
    }

    listerCategories(typeElementHtml, elementHTMLDeReference) {
        
        categorieReference.on("child_added", function (snapshot) {

            element = document.createElement(typeElementHtml);
            element.innerHTML = snapshot.val().etiquette;
            console.log(snapshot.val().etiquette);
            elementHTMLDeReference.appendChild(element);
            
        });

    }

}