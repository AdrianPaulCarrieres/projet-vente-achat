class AccueilVue {

    constructor() {
        this.creerVue();
        this.afficher()
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

        let listeArticlePanier = document.getElementById('tableau-liste-article-panier');

        let listeArticlePanierTmp = "";
        for (let i=0; i<10; i++) {
            listeArticlePanierTmp += '<tr>' + '\n' +
                '<td scope="row"><img src="https://via.placeholder.com/30" width="30" height="30" class="d-inline-block align-top"></td>' + '\n' +
                '<td scope="row">Skis</td>' + '\n' +
                '<td>24,55 CAD</td>' + '\n' +
                '<td>' + '\n' +
                '<a href="#" class="btn btn-outline-danger btn-small"><i class="fas fa-trash"></i></a>' + '\n' +
                '</td>' + '\n'
                '</tr>';
         }
         listeArticlePanier.innerHTML = listeArticlePanierTmp;
    }
}