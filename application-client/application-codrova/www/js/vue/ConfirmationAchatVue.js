var ConfirmationAchatVue = (function() {

    framgmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
    pageConfirmationAchat = document.getElementById("page-confirmation-achat").innerHTML;
    
    return function() {
        this.afficher = function() {

            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = framgmentBarreNavigationHaut + pageConfirmationAchat;        
        }
    }
})();