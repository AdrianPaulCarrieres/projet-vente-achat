var VueModifierProduit = (function () {
    navbar = document.getElementById("navbar").innerHTML;
    pageModifierProduit = document.getElementById("page-modifier").innerHTML;

    return function (actionModifierProduit) {

        this.afficher = function () {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = navbar + pageModifierProduit;

            var formulaireModifier = document.getElementById("formulaire-modifier");
            formulaireModifier.addEventListener("submit", modifier);
        };

        var modifier = function (evenement) {
            evenement.preventDefault();

            var nom = document.getElementById("modifier-nom").value;
            var etiquette= document.getElementById("modifier-etiquette").value;
            var marque = document.getElementById("modifier-marque").value;
            var modele = document.getElementById("modifier-modele").value;
            var prix = document.getElementById("modifier-prix").value;
            var image = document.getElementById("modifier-image").value;
            var idCategorie = document.getElementById("modifier-id-categorie").value;
            var idProduit = document.getElementById("modifier-id-produit").value;
            var produit = new Produit(idProduit, nom, etiquette, idCategorie, prix, marque, modele, image, true);
            actionModifierProduit(produit);

        };

    };




})();

