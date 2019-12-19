var VueAjouterProduit = (function () {
    navbar = document.getElementById("navbar").innerHTML;
    pageAjouterProduit = document.getElementById("page-ajouter").innerHTML;

    return function (actionAjouterProduit, etiquetteCategorie, taille) {
        console.log(etiquetteCategorie);
        console.log(taille);
        this.taille = taille;
        this.etiquetteCategorie = etiquetteCategorie;
        this.afficher = function () {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = navbar + pageAjouterProduit;

            var formulaireAjouter = document.getElementById("formulaire-ajouter");
            formulaireAjouter.addEventListener("submit", enregistrer);
        };
        var enregistrer = function(evenement){
            evenement.preventDefault();

            var nom = document.getElementById("ajouter-nom").value;
            var etiquette= document.getElementById("ajouter-etiquette").value;
            var marque = document.getElementById("ajouter-marque").value;
            var modele = document.getElementById("ajouter-modele").value;
            var prix = document.getElementById("ajouter-prix").value;
            var idCategorie = etiquetteCategorie;
            console.log(taille);
            var produit = new Produit(taille, nom, etiquette, idCategorie, prix, marque, modele, image, true);
            actionAjouterProduit(produit);
        };

    };




})();

