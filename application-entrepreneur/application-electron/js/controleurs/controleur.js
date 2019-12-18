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
        }else if(hash.match(/^#ajouterProduit\/([0-9]+)/)){
            var navigation = hash.match(/^#ajouterProduit\/([0-9]+)/);
            var idCategories = navigation[1];
            listeCategories = categorieDAO.listerCategories();
            var etiquetteCategorie = "";
            for (let i = 0; i < listeCategories.length; i++) {
                if (listeCategories[i].id == idCategories ){
                    etiquetteCategorie = listeCategories[i].etiquette;
                }
            }
            var ajouterProduit = new VueAjouterProduit(actionAjouterProduit, etiquetteCategorie);
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