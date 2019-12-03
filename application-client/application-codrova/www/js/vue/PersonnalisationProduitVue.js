var PersonnalisationProduitVue = (function() {

    framgmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
    pagePersonnalisationProduit = document.getElementById("page-personnalisation-produit").innerHTML;
    
    return function() {
        this.afficher = function() {

            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = framgmentBarreNavigationHaut + pagePersonnalisationProduit;        
        }
    }
})();