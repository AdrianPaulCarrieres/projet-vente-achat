class ProduitPanierDAO {

    constructor() {
        this.listeProduitPanier = [];
    }

    static getInstance() {
        if(this.instance == null) {
            this.instance = new ProduitPanierDAO();
        }
        return this.instance;
    }

    lister() {
        this.listeProduitPanier = [];
        if(localStorage['listeProduitPanier']) {
            this.listeProduitPanier = JSON.parse(localStorage['listeProduitPanier']);
        }

        let produitPanier;
        for(const position in listeProduitPanier) {
             produitPanier = new ProduitPanier(
                this.listeProduitPanier[position].produit,
                this.listeProduitPanier[position].quantite
                );
                
                this.listeProduitPanier[position] = produitPanier;
            }

        return this.listeProduitPanier;
    }
    
    listerMock() {
        this.listeProduitPanier = [];

        let listeProduit = [];
        
        for(let i=0; i<0; i++) {
            listeProduit.push(new Produit(
                i,
                'nomProduit'+i,
                'etiquette'+i,
                new Categorie(i, 'etiquette'+i),
                'prix'+i,
                'marque'+i,
                'modele'+i,
                'cheminImage'+i,
                true
            ));
        }

        for(const produit in listeProduit) {
            this.listeProduitPanier.push(new ProduitPanier(
                produit,
                10
            ));
        }
        return this.listeProduitPanier;       
    }

    
}