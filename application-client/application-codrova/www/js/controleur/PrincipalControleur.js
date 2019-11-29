(function() {

    var initialiser = function initialiser() {
        window.addEventListener("hashchange", naviguer);
        naviguer();
    };

    var naviguer = function() {
        var hash = window.location.hash;
        if(!hash) {
            acceuilVue = new AccueilVue(document);
            acceuilVue.afficher();
        }
        else if(hash.match(/^#page-confirmation-achat/)) {
            confirmationAchatVue = new ConfirmationAchatVue();
            confirmationAchatVue.afficher();
            
        }  
        else if(hash.match(/^#page-information-client/)) {
            informationClientVue = new InformationClientVue();
            informationClientVue.afficher();
            
        }   
        else if(hash.match(/^#page-liste-article/)) {
            venteVue = new ListeArticleVue();
            venteVue.afficher();
        }
        else if(hash.match(/^#page-paiement/)) {
            paiementVue = new PaiementVue();
            paiementVue.afficher();

        } 
        else if(hash.match(/^#page-personnalisation-produit/)) {
            personnalisationProduitVue = new PersonnalisationProduitVue();
            personnalisationProduitVue.afficher();

        }
    }

    initialiser();
})();