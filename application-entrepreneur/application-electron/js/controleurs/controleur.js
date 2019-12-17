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
            var  vueListeProduits = new VueListeProduits(listeProduits, listeCategories);
            vueListeProduits.afficher();
        }else if(hash.match(/^#ajouterProduit/)){
            var ajouterProduit = new VueAjouterProduit(actionAjouterProduit);
            ajouterProduit.afficher();
        }else if(hash.match(/^#modifierProduit\/([0-9]+)/)){
            var navigation = hash.match(/^#modifierProduit\/([0-9]+)/);
            var idProduit = navigation[1];
            var modifierProduit = new VueModifierProduit(produitDAO.listerProduit("id", idProduit),actionModifierProduit);
            modifierProduit.afficher();
        }
    };

    var actionAjouterProduit = function(produit){
        produitDAO.ajouterProduit(produit);
        window.location.hash = "#listeProduits";
    };

    var actionModifierProduit = function(produit){
        produitDAO.modifierProduit(produit);
        window.location.hash = "#listeProduits";
    };

    initialiser();

})();