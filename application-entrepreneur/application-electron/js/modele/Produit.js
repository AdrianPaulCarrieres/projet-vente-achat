exports.COLLECTION = 'produit';

module.exports = {
    Produit: function (idProduit, etiquette, categorie, prix, marque, modele, cheminImage, flagDisponibilite) {
        this.id_produit = idProduit;
        this.etiquette = etiquette;
        this.categorie = categorie;
        this.prix = prix;
        this.marque = marque;
        this.modele = modele;
        this.chemin_image = cheminImage;
        this.flag_disponibilite = flagDisponibilite;
    }
}