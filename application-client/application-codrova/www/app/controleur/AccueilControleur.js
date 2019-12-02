var AccueilControleur = (function() {

    accueilVue = new AccueilVue();
    panierFragment = new PanierFragment();
    accueilVue.afficher();
    panierFragment.afficher();

    return function() {
        this.afficher = function() {

            // elementBody = document.getElementsByTagName("body")[0];
            // elementBody.innerHTML = framgmentBarreNavigationHaut + pageAccueil + fragmentFooter; 
        }
    }

})();