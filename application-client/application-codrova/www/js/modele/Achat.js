exports.COLLECTION = 'achat';

module.exports = {
    Achat: function (idAchat, idProduit, idPersonnalisation, dateAchat, prix, nomClient, mailClient) {
        this.id_achat = idAchat;
        this.id_produit = idProduit;
        this.id_personnalisation = idPersonnalisation;
        this.date_achat = dateAchat;
        this.prix = prix;
        this.nom_client = nomClient;
        this.mail_client = mailClient;
    }
}