var AccueilVue = (function() {

    framgmentNavigation = document.getElementById("fragment-navigation").innerHTML;
    pageAccueil = document.getElementById("page-accueil").innerHTML;
    
    return function() {
        this.afficher = function() {

            elementBody = document.getElementsByTagName("body")[0];
            console.log(framgmentNavigation);
            elementBody.innerHTML = framgmentNavigation + pageAccueil;        
        }
    }
})();