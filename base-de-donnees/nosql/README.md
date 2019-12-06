# Base de données NoSQL

| Collection    | Champs                                                       |
| ------------- | ------------------------------------------------------------ |
| __produit__  | id_produit, etiquette, categorie, prix, marque, modele, chemin_image, flag_disponibilite |
| __categorie__ | id_categorie, etiquette                                      |
| __achat__ | id_achat, id_produit, id_personnalisation, date_achat, mois_achat, prix, nom_client, mail_client |

flag_disponibilite = 0 si "supprimer", 1 si disponible