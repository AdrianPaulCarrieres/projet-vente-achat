class ProduitDAO {

    constructor() {
        this.listeProduit = [];
    }

    listerProduitDeCategorie(categorie) {
        // this.listeProduit = [];
        // if(localStorage['listeProduit']) {
        //     this.listeProduit = JSON.parse(localStorage['listeProduit']);
        // }

        // let produit;
        // for(const position in this.listeProduit) {
        //     produit = new Produit(
        //         this.listeProduit[position].produit,
        //         this.listeProduit[position].quantite
        //         );
                
        //         this.listeProduit[position] = produit;
        //     }

        return this.listerProduitDeCategorieMock(categorie);
    }

    listerProduitDeCategorieMock(categorie) {
        this.listeProduit = [];
        
        for(let i=0; i<10; i++) {
            this.listeProduit.push(new Produit(

                i,
                'nomProduit'+i,
                new Categorie(1, categorie),
                i*4.32 +' CAD',
                'marque'+i,
                'modele'+i,
                'cheminImage'+i,
                true
            ));
        }
        return this.listeProduit;
    }
}