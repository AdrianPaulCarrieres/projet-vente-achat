var produitDAO = new ProduitDAO();
console.log("ca marche");

produitDAO.listerTousLesProduitsFirebase("li", document.getElementById("liste-produits"));