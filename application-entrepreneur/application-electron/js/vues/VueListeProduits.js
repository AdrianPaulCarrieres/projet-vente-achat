var VueListeProduits = (function () {
    navbar = document.getElementById("navbar").innerHTML;
    pageListeProduits = document.getElementById("page-liste-produits").innerHTML;

    return function () {

        this.afficher = function () {
            console.log("affichage");
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = navbar + pageListeProduits;
        }
    };

})();