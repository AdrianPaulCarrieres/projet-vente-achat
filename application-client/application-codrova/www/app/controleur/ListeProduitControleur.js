class ListeProduitControleur {

    constructor(categorieProduit) {

        this.produitDAO = new ProduitDAO();

        let listeProduit = this.produitDAO.listerProduitDeCategorie(categorieProduit);

        this.listeProduitVue = new ListeProduitVue();
        this.listeProduitVue.afficher(listeProduit);
    }
}