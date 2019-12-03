var ListeArticleVue = (function() {

    framgmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
    pageListeArticle = document.getElementById("page-liste-article").innerHTML;
    
    return function() {
        this.afficher = function() {

            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = framgmentBarreNavigationHaut + pageListeArticle;        
        }
    }
})();