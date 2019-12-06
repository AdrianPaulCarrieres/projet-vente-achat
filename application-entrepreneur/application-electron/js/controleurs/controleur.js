(function() {

    var initialiser = function () {
        window.addEventListener("hashchange", naviguer);
        naviguer();
        console.log("naviguer");
    };

    var naviguer = function(){
        var hash = window.location.hash;

        if (!hash){
            var vueStatistiques = new VueStatistiques();
            vueStatistiques.afficher();
        }else if(hash.match(/^#listeProduits/)){
            var  vueListeProduits = new VueListeProduits();
            vueListeProduits.afficher();
        }
    };

    initialiser();

})();