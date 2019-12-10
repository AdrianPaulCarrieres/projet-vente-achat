(function() {

    var initialiser = function initialiser() {
        window.addEventListener("hashchange", naviguer);
        naviguer();
    };

    var naviguer = function() {
        var hash = window.location.hash;
        if(!hash) {
            new AccueilControleur();
        }
        else if(hash.match(/^#vente-([a-z]+)/)) {
            var categorieProduit = hash.match(/^#vente-([a-z]+)/)[1];
            new ListeProduitControleur(categorieProduit);
        }

    };

    initialiser();
})();

    // else if(hash.match(/^#confirmation-achat\/([0-9]+)/)){
    //     var navigation = hash.match(/^#modifier-devoir\/([0-9]+)/);
    //     var idDevoir = navigation[1];

    //     var listeDevoirDonnee = devoirDAO.lister();
    //     var modifierDevoirVue = new ModifierDevoirVue(listeDevoirDonnee[idDevoir], actionModifierDevoir);
    //     modifierDevoirVue.afficher();
    // }

    // else if(hash.match(/^#page-information-client/)) {
    //     informationClientVue = new InformationClientVue();
    //     informationClientVue.afficher();
        
    // }   
    // else if(hash.match(/^#page-liste-article/)) {
    //     venteVue = new ListeArticleVue();
    //     venteVue.afficher();
    // }
    // else if(hash.match(/^#page-paiement/)) {
    //     paiementVue = new PaiementVue();
    //     paiementVue.afficher();

    // } 
    // else if(hash.match(/^#page-personnalisation-produit/)) {
    //     personnalisationProduitVue = new PersonnalisationProduitVue();
    //     personnalisationProduitVue.afficher();

    // }