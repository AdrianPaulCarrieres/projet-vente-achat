var VueListeProduits = (function () {
    navbar = document.getElementById("navbar").innerHTML;
    pageListeProduits = document.getElementById("page-liste-produits").innerHTML;

    return function (listeProduits, listeCategories, actionAjouterProduit, actionModifierProduit) {

        this.afficher = function () {
            console.log("affichage");
            console.log(listeProduits);
            //TODO: var resultatQuery = await produitDAO.nomMethode();
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = navbar + pageListeProduits;
            var liste = document.getElementById("accordeon-categories");
            var texteListeCategories = liste.innerHTML;
            for (let i = 0; i < listeCategories.length; i++) {
                texteListeCategories+= '<div class="card">\n' +
                    '            <div class="card-header" id="heading'+i+'">\n' +
                    '                <h2 class="mb-0">\n' +
                    '                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="false" aria-controls="collapse'+i+'">\n' + listeCategories[i].etiquette +
                    '                    </button>\n' +
                    '                </h2>\n' +
                    '            </div>'+'' +
                    '<div id="collapse'+i+'" class="collapse " aria-labelledby="heading'+i+'" data-parent="#accordeon-categories">\n' +
                '                <ul class="list-group">\n';
                for (let j = 0; j < listeProduits.length ; j++) {
                    if (listeCategories[i].id == listeProduits[j].id_categorie) {
                        texteListeCategories += '' +

                            '                    <li class="list-group-item">\n' +
                            '                        <div class="row justify-content-center align-items-center">\n' +
                            '                        <div class="col-l2">\n' +
                            '                            <img src="https://via.placeholder.com/150 '+listeProduits[j].image+'" width="50" height="50">\n' +
                            '                        </div>\n' +
                            '                        <div class="col-6">\n' + listeProduits[j].etiquette +
                            '                        </div>\n' +
                            '                        <div class="col-4">\n' +
                            '                            <button class="btn btn-warning">\n' +
                            '                                Mod\n' +
                            '                            </button>\n' +
                            '                            <button class="btn btn-danger">\n' +
                            '                                Sup\n' +
                            '                            </button>\n' +
                            '                        </div>\n' +
                            '                        </div>\n' +
                            '                    </li>\n'
                    }
                }
                texteListeCategories += '<li class="list-group-item list-group-item-action list-group-item-success"><div class="row justify-content-center align-items-center"><div class="col-3"><button class="btn btn-success" onclick="modalAjouter('+listeCategories[i].id+')" data-toggle="modal" data-target="#modal-ajout">Ajouter un produit</button></div></div></li>' +
                    '                </ul>\n' +
                    '            </div>';
                texteListeCategories+='</div>'
            }
            liste.innerHTML = texteListeCategories;
        }
        var enregistrer = function(evenement){
            evenement.preventDefault();

            var nom = document.getElementById("ajouter-nom").value;
            var etiquette= document.getElementById("ajouter-etiquette").value;
            var marque = document.getElementById("ajouter-marque").value;
            var modele = document.getElementById("ajouter-modele").value;
            var prix = document.getElementById("ajouter-prix").value;
            var image = document.getElementById("ajouter-image").value;
            var idCategorie = document.getElementById("ajouter-id-categorie").value;
            var produit = new Produit(null, nom, etiquette, idCategorie, prix, marque, modele, image, true);
            actionAjouterProduit(produit);
        }

        var modifier = function (evenement) {
            evenement.preventDefault();

            var nom = document.getElementById("modifier-nom").value;
            var etiquette= document.getElementById("modifier-etiquette").value;
            var marque = document.getElementById("modifier-marque").value;
            var modele = document.getElementById("modifier-modele").value;
            var prix = document.getElementById("modifier-prix").value;
            var image = document.getElementById("modifier-image").value;
            var idCategorie = document.getElementById("modifier-id-categorie").value;
            var produit = new Produit(null, nom, etiquette, idCategorie, prix, marque, modele, image, true);
            actionModifierProduit(produit);

        }
    };




})();

