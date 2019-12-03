var VueStatistiques = (function () {
    navbar = document.getElementById("navbar").innerHTML;
    pageStatistiques = document.getElementById("pages_statistiques").innerHTML;

    return function () {

        this.afficher = function () {
            console.log("affichage");
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = navbar + pageStatistiques;
            peuplerTableauAnnee();
            peuplerTab
        }
    };

    function peuplerTableauAnnee(){
        tableauAnnee = document.getElementById("corps_tableau_anneau");
        var nombre, total, moyenne, meilleurProduit, meilleureCategorie;
        nombre = 200;
        total = "$508.20";
        moyenne = "$2.50";
        meilleurProduit = "veste arc'teryx";
        meilleureCategorie = "ski";
        var textTableau = "";
        for (let i = 0; i < 13; i++) {
            textTableau += "<tr>"
                +"<th>"+i+"</th>"
                +"<th>"+nombre+"</th>"
                +"<th>"+total+"</th>"
                +"<th>"+moyenne+"</th>"
                +"<th>"+meilleurProduit+"</th>"
                +"<th>"+meilleureCategorie+"</th>"
                +"</tr>"
        }
        tableauAnnee.innerHTML = textTableau;
    }
})();