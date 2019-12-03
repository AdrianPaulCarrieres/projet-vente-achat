(function() {

    var initialiser = function () {
        window.addEventListener("hashchange", naviguer);
        naviguer();
    };

    var naviguer = function(){
        var hash = window.location.hash;

        if (!hash){
            var vueStatistiques = new VueStatistiques();
            vueStatistiques.afficher();
        }
    };
    
})();