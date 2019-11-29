var PaiementVue = (function() {

    framgmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
    pagePaiement = document.getElementById("page-paiement").innerHTML;
    
    return function() {
        this.afficher = function() {

            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = framgmentBarreNavigationHaut + pagePaiement;        
        }
    }
})();