class ListeProduitVue {

    constructor() {
        this.pageListeProduit = document.getElementById("fragment-barre-navigation-haut").innerHTML + document.getElementById("page-liste-produit").innerHTML;
    }

    afficher(listeProduit) {
        let elementBody = document.getElementsByTagName("body")[0];
        elementBody.innerHTML = this.pageListeProduit;

        let htmlListeProduit = "";

        for(const i in listeProduit) {
            htmlListeProduit += '<div class="col-3">' + '\n' +
                '<div class="card my-2">' + '\n' +
                '<img src="https://via.placeholder.com/150" class="card-img-top" width="150" height="150" alt="...">' + '\n' +
                '<div class="card-body">' + '\n' +
                '<h5 class="card-title">' + listeProduit[i].etiquette + '</h5>' + '\n' +
                '<p class="card-text"></p>' + '\n' +
                '<p class="card-text"><strong>' + listeProduit[i].prix + '</strong></p>' + '\n' +
                '<a href="#personnaliser-produit-'+listeProduit[i].idProduit+'" class="btn btn-outline-dark">Acheter</a>' + '\n' +
                '</div>' + '\n' +
                '</div>' + '\n' +
                '</div>';

        }
        document.getElementById("liste-produit").innerHTML = htmlListeProduit;
    }
}