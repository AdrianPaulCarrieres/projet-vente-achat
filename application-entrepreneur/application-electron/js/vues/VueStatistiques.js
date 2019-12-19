var VueStatistiques = (function () {
    navbar = document.getElementById("navbar").innerHTML;
    pageStatistiques = document.getElementById("pages_statistiques").innerHTML;

    return function (listeProduitsStatistiques, listeCategoriesStatistiques, listeAnneeStatistiques, chiffreAffaire) {
        console.log(listeProduitsStatistiques, listeCategoriesStatistiques, listeAnneeStatistiques, chiffreAffaire);
        this.afficher = function () {
            console.log("affichage");
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = navbar + pageStatistiques;
            peuplerTableauAnnee(listeAnneeStatistiques);
            peuplerTableauProduit(listeProduitsStatistiques);
            peublerTableauCategories(listeCategoriesStatistiques);
            document.getElementById("chiffre_affaire").innerHTML = chiffreAffaire;
        }
    };

    function peuplerTableauProduit(listeProduitsStatistiques) {
        tableauProduits = document.getElementById("corps_tableau_produit");
        var produit, nombre, total,  moyenne;
        var textTableau = "";
        for (let i = 0; i < listeProduitsStatistiques.length; i++) {
            produit = listeProduitsStatistiques[i]._id.etiquette;
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
                +"</tr>"
        }
        tableauProduits.innerHTML = textTableau;
    }

    function peublerTableauCategories(listeCategoriesStatistiques) {
        tableauCategories = document.getElementById("corps_tableau_categorie");
        var categorie, nombre, total,  moyenne;
        var textTableau = "";
        for (let i = 0; i < listeCategoriesStatistiques.length; i++) {
            categorie = listeCategoriesStatistiques[i]._id;
            nombre = listeCategoriesStatistiques[i].nombre_produit;
            total = listeCategoriesStatistiques[i].prix_total;
            moyenne = listeCategoriesStatistiques[i].prix_moyen;
            meilleurProduit = "casque";
            meilleurMois = "Novembre";
            textTableau += "<tr>"
                +"<th>"+categorie+"</th>"
                +"<th>"+nombre+"</th>"
                +"<th>"+total+"</th>"
                +"<th>"+moyenne+"</th>"
                +"</tr>"
        }
        tableauCategories.innerHTML = textTableau;
    }

    function peuplerTableauAnnee(listeAnneeStatistiques){
        tableauAnnee = document.getElementById("corps_tableau_annee");
        var nombre, total, moyenne, mois;
        textTableau = "";
        for (let i = 0; i < listeAnneeStatistiques.length ; i++) {
            mois = listeAnneeStatistiques[i]._id;
            console.log('Mois', mois);
            nombre = listeAnneeStatistiques[i].nombre_produit;
            total = listeAnneeStatistiques[i].prix_total;
            moyenne = listeAnneeStatistiques[i].prix_moyen;
            textTableau += "<tr>"
                +"<th>"+mois+"</th>"
                +"<th>"+nombre+"</th>"
                +"<th>"+total+"</th>"
                +"<th>"+moyenne+"</th>"
                +"</tr>"
        }


        tableauAnnee.innerHTML = textTableau;
    }
})();