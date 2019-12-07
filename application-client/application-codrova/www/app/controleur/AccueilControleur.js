class AccueilControleur {
    
    constructor() {
        this.accueilVue = new AccueilVue();

        let listeProduitPanier = ProduitPanierDAO.getInstance().listerMock();

        let tableauListeProduitPanier = document.getElementById('tableau-liste-produit-panier');
        let tableau = "";
        for (const produitPanier in listeProduitPanier) {
            tableau += '<tr>' + '\n' +
                '<td scope="row"><img src="https://via.placeholder.com/30" width="30" height="30" class="d-inline-block align-top"></td>' + '\n' +
                '<td scope="row">' + produitPanier.etiquette +'</td>' + '\n' +
                '<td>' + produitPanier.prix + ' CAD</td>' + '\n' +
                '<td>' + '\n' +
                '<button onAction="ProduitPanierDAO().getInstance().supprimerProduitParId('+ 1 +')" class="btn btn-outline-danger btn-small"><i class="fas fa-trash"></i></button>' + '\n' +
                '</td>' + '\n' +
                '</tr>';
            console.log(tableau);
        }
        tableauListeProduitPanier.innerHTML = tableau;

        this.accueilVue.creerVue();
        this.accueilVue.afficher();
    }


}