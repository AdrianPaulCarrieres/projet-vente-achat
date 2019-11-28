var VenteSkiVue = (function() {

    pageVenteSki = document.getElementById("page-vente-ski").innerHTML;
    
    return function() {
        this.afficher = function() {

            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageVenteSki;
        
        }
    }
})();