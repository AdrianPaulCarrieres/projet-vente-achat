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
            console.log(listeCategories);
            var listeProduits = await produitDAO.listerTousLesProduits();
            var  vueListeProduits = new VueListeProduits(listeProduits, listeCategories);
            vueListeProduits.afficher();
        }else if(hash.match(/^#ajouterProduit\/([0-9]+)/)){
            console.log("ajout");
            var navigation = hash.match(/^#ajouterProduit\/([0-9]+)/);
            var idCategories = navigation[1];
            listeCategories = await categorieDAO.listerCategories();
            var liste = await produitDAO.listerTousLesProduits();
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
            var liste = await produitDAO.listerTousLesProduits();
            var produit;
            for (let i = 0; i < liste.length; i++) {
                if (liste[i].id_produit == idProduit){
                    produit = liste[i];
                }
            }
            var modifierProduit = new VueModifierProduit(produit,actionModifierProduit);
            modifierProduit.afficher();
        }else if(hash.match(/^#supprimerProduit\/([0-9]+)/)){
            console.log("suppression");
            var navigation = hash.match(/^#supprimerProduit\/([0-9]+)/);
            var idProduit = navigation[1];
            produit = await produitDAO.recupererProduitParID(parseInt(idProduit));
            actionMasquerProduit(produit);
        }
    };

    var actionAjouterProduit = function(produit){
        produitDAO.ajouterProduit(produit);
        window.location.hash = "#listeProduits";
    };

    var actionModifierProduit = function(produit){
        console.log(produit);
        produitDAO.modifierProduit("id_produit", parseInt(produit.id_produit), produit);
        window.location.hash = "#listeProduits";
    };

    var actionMasquerProduit = function(produit){
        //met le flag du produit a false pour qu il ne soit plus disponible, ni affiché sur la liste des produits, mais qu'il soit toujours dans les statistiques
        console.log("suppression de : "+ produit);
        produit.flag_disponibilite = false;
        produitDAO.modifierProduit("id_produit", parseInt(produit.id_produit), produit);
        window.location.hash = "#listeProduits";
    }

    initialiser();

})();