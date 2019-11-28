(function() {

    var initialiser = function initialiser() {
        window.addEventListener("hashchange", naviguer);
        naviguer();
    };

    var naviguer = function() {
        var hash = window.location.hash;
        if(!hash) {
            acceuilVue = new AccueilVue(document);
            acceuilVue.afficher();
        }
        else if(hash.match(/^#page-page1/)) {
            page1Vue = new Page1Vue();
            page1Vue.afficher();
            console.log("dzd");
        }
        else if(hash.match(/^#page-page2/)) {
            page2Vue = new Page2Vue();
            page2Vue.afficher();

        }        
    }

    initialiser();
})();