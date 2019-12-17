(function() {

    var initialiser = function () {
        window.addEventListener("hashchange", naviguer);
        categorieDAO = new CategorieDAO();
        produitDAO = new ProduitDAO();
        naviguer();
        console.log("naviguer");
    };

    var naviguer = async function(){
        var hash = window.location.hash;

        if (!hash){
            listeProduitsStatistiques = produitDAO.listerProduitTableauStatistiques();
            listeCategoriesStatistiques = produitDAO.listerCategorieTableauStatistiques();
            var vueStatistiques = new VueStatistiques(listeProduitsStatistiques, listeCategoriesStatistiques);
            vueStatistiques.afficher();
        }else if(hash.match(/^#listeProduits/)){
            var listeCategories = await categorieDAO.listerCategories();
            var listeProduits = await produitDAO.listerTousLesProduits();
            console.log(listeProduits);
            console.log(listeCategories);
            var  vueListeProduits = new VueListeProduits(listeProduits, listeCategories);
            vueListeProduits.afficher();
        }
    };

    initialiser();

})();