(function() {

    var initialiser = function () {
        window.addEventListener("hashchange", naviguer);

        produitDAO = new ProduitDAO();
        naviguer();
        console.log("naviguer");
    };

    var naviguer = async function(){
        var hash = window.location.hash;

        if (!hash){
            var vueStatistiques = new VueStatistiques();
            vueStatistiques.afficher();
        }else if(hash.match(/^#listeProduits/)){
            var listeProduits = await produitDAO.listerTousLesProduits();
            var  vueListeProduits = new VueListeProduits(listeProduits);
            vueListeProduits.afficher();
        }
    };

    initialiser();

})();