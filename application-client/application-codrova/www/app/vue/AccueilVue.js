class AccueilVue {

    constructor() {
        this.creerVue();
        this.afficher();
    }
    
    creerVue() {
        this.framgmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
        this.pageAccueil = document.getElementById("page-accueil").innerHTML;
        this.fragmentFooter = document.getElementById("fragment-footer").innerHTML;
        this.fragmentModalPanier = document.getElementById("fragment-modal-panier").innerHTML;
    }

    afficher() {
        let elementBody = document.getElementsByTagName("body")[0];
        elementBody.innerHTML = this.framgmentBarreNavigationHaut + this.pageAccueil + this.fragmentFooter + this.fragmentModalPanier;
    }
}