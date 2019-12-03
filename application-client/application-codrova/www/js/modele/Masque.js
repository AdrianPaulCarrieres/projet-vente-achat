module.exports = {
    Masque: function (idMasque, etiquette, categorie, prix, taille, marque, modele, antiBuee, antiRayures, antiUV) {
        this.id_masque = idMasque;
        this.etiquette = etiquette;
        this.categorie = categorie;
        this.prix = prix;
        this.taille = taille;
        this.marque = marque;
        this.modele = modele;
        this.anti_buee = antiBuee;
        this.anti_rayures = antiRayures;
        this.anti_uv = antiUV;
    }
}