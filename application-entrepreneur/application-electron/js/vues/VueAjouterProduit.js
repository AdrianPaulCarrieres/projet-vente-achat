var VueAjouterProduit = (function () {
    navbar = document.getElementById("navbar").innerHTML;
    pageAjouterProduit = document.getElementById("page-ajouter").innerHTML;

    return function (actionAjouterProduit, etiquetteCategorie) {
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
            var image = document.getElementById("ajouter-image").value;
            var idCategorie = this.etiquetteCategorie;
            var produit = new Produit(null, nom, etiquette, idCategorie, prix, marque, modele, image, true);
            actionAjouterProduit(produit);
        };

    };




})();

