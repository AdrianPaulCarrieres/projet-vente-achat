var produitDAO = new ProduitDAO();
console.log("ca marche");

produitDAO.listerTousLesProduitsFirebase("li", document.getElementById("liste-produits"));
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