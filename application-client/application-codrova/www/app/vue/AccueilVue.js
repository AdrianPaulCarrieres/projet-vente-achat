class AccueilVue {

    constructor() {
        this.fragmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
        this.pageAccueil = document.getElementById("page-accueil").innerHTML;
    }

    afficher() {
        let elementBody = document.getElementsByTagName("body")[0];
        elementBody.innerHTML = this.fragmentBarreNavigationHaut + this.pageAccueil;

    }
}