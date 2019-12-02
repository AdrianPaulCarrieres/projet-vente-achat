var AccueilVue = (function() {

    framgmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
    pageAccueil = document.getElementById("page-accueil").innerHTML;
    fragmentFooter = document.getElementById("fragment-footer").innerHTML;

    return function() {
        this.afficher = function() {

            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = framgmentBarreNavigationHaut + pageAccueil + fragmentFooter; 
        }
    }
})();