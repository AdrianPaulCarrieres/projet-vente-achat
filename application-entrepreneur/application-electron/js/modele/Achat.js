// exports.COLLECTION = 'achat';

class Achat {
    constructor(idAchat, idProduit, idPersonnalisation, dateAchat, moisAchat, prix, nomClient, mailClient) {

        this.id_achat = idAchat;
        this.id_produit = idProduit;
        this.id_personnalisation = idPersonnalisation;
        this.date_achat = dateAchat;
        this.mois_achat = moisAchat;
        this.prix = prix;
        this.nom_client = nomClient;
        this.mail_client = mailClient;

    }


}

// module.exports = {
//     Achat: function (idAchat, idProduit, idPersonnalisation, dateAchat, moisAchat, prix, nomClient, mailClient) {
//         this.id_achat = idAchat;
//         this.id_produit = idProduit;
//         this.id_personnalisation = idPersonnalisation;
//         this.date_achat = dateAchat;
//         this.mois_achat = moisAchat;
//         this.prix = prix;
//         this.nom_client = nomClient;
//         this.mail_client = mailClient;
//     }
// }