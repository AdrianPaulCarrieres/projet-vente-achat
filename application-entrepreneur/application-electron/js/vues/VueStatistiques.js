var VueStatistiques = (function () {
    navbar = document.getElementById("navbar").innerHTML;
    pageStatistiques = document.getElementById("pages_statistiques").innerHTML;

    return function (listeProduitsStatistiques, listeCategoriesStatistiques) {

        this.afficher = function () {
            console.log("affichage");
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = navbar + pageStatistiques;
            peuplerTableauAnnee();
            peuplerTableauProduit(listeProduitsStatistiques);
            peublerTableauCategories();
        }
    };

    function peuplerTableauProduit(listeProduitsStatistiques) {
        tableauProduits = document.getElementById("corps_tableau_produit");
        var produit, nombre, total,  moyenne, categorie, meilleurMois
        var textTableau = "";
        for (let i = 0; i < listeProduitsStatistiques.length; i++) {
            produit = "ski";
            nombre = listeProduitsStatistiques[i].nombre_produit;
            total = listeProduitsStatistiques[i].prix_total;
            moyenne = listeProduitsStatistiques[i].prix_moyen;
            categorie = "equipement";
            meilleurMois = "Novembre";
            textTableau += "<tr>"
                +"<th>"+produit+"</th>"
                +"<th>"+nombre+"</th>"
                +"<th>"+total+"</th>"
                +"<th>"+moyenne+"</th>"
                +"<th>"+meilleurMois+"</th>"
                +"<th>"+categorie+"</th>"
                +"</tr>"
        }
        tableauProduits.innerHTML = textTableau;
    }

    function peublerTableauCategories() {
        tableauCategories = document.getElementById("corps_tableau_categorie");
        var categorie, nombre, total,  moyenne, meilleurProduit, meilleurMois
        var textTableau = "";
        for (let i = 0; i < 6; i++) {
            categorie = "vetements";
            nombre = 85;
            total = "$3610";
            moyenne = "$60$";
            meilleurProduit = "casque";
            meilleurMois = "Novembre";
            textTableau += "<tr>"
                +"<th>"+categorie+"</th>"
                +"<th>"+nombre+"</th>"
                +"<th>"+total+"</th>"
                +"<th>"+moyenne+"</th>"
                +"<th>"+meilleurProduit+"</th>"
                +"<th>"+meilleurMois+"</th>"
                +"</tr>"
        }
        tableauCategories.innerHTML = textTableau;
    }

    function peuplerTableauAnnee(){
        tableauAnnee = document.getElementById("corps_tableau_annee");
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