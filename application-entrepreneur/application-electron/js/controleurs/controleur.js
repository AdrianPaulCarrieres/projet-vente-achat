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
            /* a decommenter pour tester l'Ajout de produits avec firebase*/
            var produit = new Produit(5, "testajout", "test", "équipement de snowboard", 20, "testmarque", "testmodele", "image", true);
            /* produitDAO.ajouterProduitFirebase(produit);*/
            produitDAO.modifierProduitFirebase(produit);
        }else if(hash.match(/^#listeProduits/)){
            var listeCategories = await categorieDAO.listerCategories();
            console.log(listeCategories);
            var listeProduits = await produitDAO.listerTousLesProduitsAncien();
            var  vueListeProduits = new VueListeProduits(listeProduits, listeCategories);
            vueListeProduits.afficher();
        }else if(hash.match(/^#ajouterProduit\/([0-9]+)/)){
            console.log("ajout");
            var navigation = hash.match(/^#ajouterProduit\/([0-9]+)/);
            var idCategories = navigation[1];
            listeCategories = await categorieDAO.listerCategories();
            var liste = await produitDAO.listerTousLesProduitsAncien();
            var taille = liste.length;
            console.log(taille);
            console.log(idCategories);
            var etiquetteCategorie = "";
            console.log(listeCategories);

            for (let i = 0; i < listeCategories.length; i++) {
                if (listeCategories[i].id_categorie == idCategories ){
                    console.log(listeCategories[i].etiquette);
                    etiquetteCategorie = listeCategories[i].etiquette;
                }
            }
            console.log(etiquetteCategorie);
            var ajouterProduit = new VueAjouterProduit(actionAjouterProduit, etiquetteCategorie, taille);
            ajouterProduit.afficher();
        }else if(hash.match(/^#modifierProduit\/([0-9]+)/)){
            console.log("modification");
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