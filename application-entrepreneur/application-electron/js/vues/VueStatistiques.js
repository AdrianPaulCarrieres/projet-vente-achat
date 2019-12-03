var VueStatistiques = (function () {
    navbar = document.getElementById("navbar").innerHTML;
    pageStatistiques = document.getElementById("pages_statistiques").innerHTML;

    return function () {

        this.afficher = function () {
            console.log("affichage");
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = navbar + pageStatistiques;
        }

    }
})();