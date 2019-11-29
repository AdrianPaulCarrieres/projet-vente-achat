module.exports = {
    Vetement: function (idVetement, etiquette, categorie, prix, nomVetement, taille, marque, modele) {
        this.id_vetement = idVetement;
        this.etiquette = etiquette;
        this.categorie = categorie;
        this.prix = prix;
        this.nom_vetement = nomVetement;
        this.taille = taille;
        this.marque = marque;
        this.modele = modele;
    }
}