(function() {

    var initialiser = function () {
        window.addEventListener("hashchange", naviguer);
        categorieDAO = new CategorieDAO();
        produitDAO = new ProduitDAO();
        achatDAO = new AchatDAO();
        naviguer();
        console.log("naviguer");
    };

    var naviguer = async function(){
        var hash = window.location.hash;

        if (!hash){
            listeProduitsStatistiques = await produitDAO.listerProduitTableauStatistiques();
            listeCategoriesStatistiques = await produitDAO.listerCategorieTableauStatistiques();
            listeAnneeStatistiques = await produitDAO.listerMoisTableauStatistiques();
            console.log(listeAnneeStatistiques);
            chiffreAffaire =  await produitDAO.valeurTotal(); //TODO : regler l'erreur dans cette fonction : Uncaught (in promise) TypeError: Cannot read property 'prix_total' of undefined at ProduitDAO.valeurTotal (ProduitDAO.js:126) at processTicksAndRejections (internal/process/task_queues.js:89)
            var vueStatistiques = new VueStatistiques(listeProduitsStatistiques, listeCategoriesStatistiques, listeAnneeStatistiques, chiffreAffaire);
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
            produit = await produitDAO.recupererProduitParID(parseInt(idProduit));
            produit = produit[0];
            var modifierProduit = new VueModifierProduit(produit,actionModifierProduit);
            modifierProduit.afficher();
        }else if(hash.match(/^#supprimerProduit\/([0-9]+)/)){
            console.log("suppression");
            var navigation = hash.match(/^#supprimerProduit\/([0-9]+)/);
            var idProduit = navigation[1];
            produit = await produitDAO.recupererProduitParID(parseInt(idProduit));
            console.log(produit[0]);
            produit = produit[0];
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
        console.log(produit.id_produit);
        produitDAO.modifierProduit("id_produit", parseInt(produit.id_produit), produit);
        window.location.hash = "#listeProduits";
    }

    initialiser();

})();