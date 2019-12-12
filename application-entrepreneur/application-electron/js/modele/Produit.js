// exports.COLLECTION = 'produit';

// module.exports = {
//     Produit: function (idProduit, nomProduit, etiquette, categorie, prix, marque, modele, cheminImage, flagDisponibilite) {
//         this.id_produit = idProduit;
//         this.nom_produit = nomProduit;
//         this.etiquette = etiquette;
//         this.categorie = categorie;
//         this.prix = prix;
//         this.marque = marque;
//         this.modele = modele;
//         this.chemin_image = cheminImage;
//         this.flag_disponibilite = flagDisponibilite;
//     }
// }

class Produit {

    constructor(idProduit, nomProduit, etiquette, categorie, prix, marque, modele, cheminImage, flagDisponibilite) {

        this.id_produit = idProduit;
        this.nom_produit = nomProduit;
        this.etiquette = etiquette;
        this.categorie = categorie;
        this.prix = prix;
        this.marque = marque;
        this.modele = modele;
        this.chemin_image = cheminImage;
        this.flag_disponibilite = flagDisponibilite;

    }

}