var VueModifierProduit = (function () {
    navbar = document.getElementById("navbar").innerHTML;
    pageModifierProduit = document.getElementById("page-modifier").innerHTML;

    return function (produit, actionModifierProduit) {
        this.produit = produit;
        console.log(produit);
        console.log(this.produit);
        this.afficher = function () {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = navbar + pageModifierProduit;

            document.getElementById("modifier-nom").value = this.produit.nom_produit;
            document.getElementById("modifier-etiquette").value = this.produit.etiquette;
            document.getElementById("modifier-marque").value = this.produit.marque;
            document.getElementById("modifier-modele").value = this.produit.modele;
            document.getElementById("modifier-prix").value = this.produit.prix;
            // document.getElementById("modifier-image").value = this.produit.image;
            document.getElementById("modifier-id-categorie").value = this.produit.categorie;
            document.getElementById("modifier-id-produit").value = this.produit.id_produit;

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
            // var image = document.getElementById("modifier-image").value;
            image = "";
            var idCategorie = document.getElementById("modifier-id-categorie").value;
            var idProduit = parseInt(document.getElementById("modifier-id-produit").value);
            var produit = new Produit(idProduit, nom, etiquette, idCategorie, parseInt(prix), marque, modele, image, true);
            actionModifierProduit(produit);

        };

    };




})();

