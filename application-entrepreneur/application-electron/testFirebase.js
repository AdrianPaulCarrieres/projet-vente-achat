var produitDAO = new ProduitDAO();

produitDAO.listerTousLesProduitsFirebase("li", document.getElementById("liste-produits"));
console.log(produitDAO.listerTousLesProduits());
function ajouter(){
    var categorie = document.getElementById("categorie-ajouter").value;
    var image = document.getElementById("image-ajouter").value;
    var etiquette = document.getElementById("etiquette-ajouter").value;
    var flag = document.getElementById("flag-ajouter").value;
    var id = document.getElementById("id-ajouter").value;
    var marque = document.getElementById("marque-ajouter").value;
    var modele = document.getElementById("modele-ajouter").value;
    var nom = document.getElementById("nom-ajouter").value;
    var prix = document.getElementById("prix-ajouter").value;
    if (flag == "true"){
        flag = true;
    }else{
        flag = false
    }

    var produit = new Produit(parseInt(id),nom, etiquette, categorie, parseInt(prix), marque, modele, image, flag);
    produitDAO.ajouterProduit(produit);
}

function modifier(){
    var categorie = document.getElementById("categorie-modifier").value;
    var image = document.getElementById("image-modifier").value;
    var etiquette = document.getElementById("etiquette-modifier").value;
    var flag = document.getElementById("flag-modifier").value;
    var id = document.getElementById("id-modifier").value;
    var marque = document.getElementById("marque-modifier").value;
    var modele = document.getElementById("modele-modifier").value;
    var nom = document.getElementById("nom-modifier").value;
    var prix = document.getElementById("prix-modifier").value;
    if (flag == "true"){
        flag = true;
    }else{
        flag = false
    }

    var produit = new Produit(parseInt(id),nom, etiquette, categorie, parseInt(prix), marque, modele, image, flag);
    produitDAO.modifierProduitFirebase(produit);
}

function afficherModifier(id) {
    document.getElementById("id-modifier").value = id;
}