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
                if (i==0){
                    img = "img/ski.png";
                }else{
                    img = "img/snowboard.png";
                }
                texteListeCategories+= '<div class="card">\n' +
                    '            <div class="card-header" id="heading'+i+'">\n' +
                    '                <h2 class="mb-0">\n' +
                    '                            <img src="'+img+'" width="50" height="50">\n' +
                    '                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="false" aria-controls="collapse'+i+'">\n' + listeCategories[i].etiquette +
                    '                    </button>\n' +
                    '                </h2>\n' +
                    '            </div>'+'' +
                    '<div id="collapse'+i+'" class="collapse " aria-labelledby="heading'+i+'" data-parent="#accordeon-categories">\n' +
                '                <ul class="list-group">\n';
                for (let j = 0; j < listeProduits.length ; j++) {
                    if (listeCategories[i].etiquette == listeProduits[j].categorie) {
                        texteListeCategories += '' +

                            '                    <li class="list-group-item">\n' +
                            '                        <div class="row justify-content-center align-items-center">\n' +
                            '                        <div class="col-l2">\n' +
                            '                            <img src="https://via.placeholder.com/150 '+listeProduits[j].image+'" width="50" height="50">\n' +
                            '                        </div>\n' +
                            '                        <div class="col-6">\n' + listeProduits[j].etiquette +
                            '                        </div>\n' +
                            '                        <div class="col-4">\n' +
                            '                            <a  href="#modifierProduit/'+ listeProduits[j].id_produit +'" class="btn btn-warning">\n' +
                            '                                <i class="fas fa-pen"></i>\n' +
                            '                            </a>\n' +
                            '                            <a href="#AjouterProduit" class="btn btn-danger">\n' +
                            '                                <i class="fas fa-trash"></i>\n' +
                            '                            </a>\n' +
                            '                        </div>\n' +
                            '                        </div>\n' +
                            '                    </li>\n'
                    }
                }
                texteListeCategories += '<li class="list-group-item list-group-item-action list-group-item-success"><div class="row justify-content-center align-items-center"><div class="col-3 row justify-content-center align-items-center" ><a href="#ajouterProduit/'+ listeCategories[i].id_categorie +'" class="btn btn-success" ><i class="fas fa-plus"></i></a></div></div></li>' +
                    '                </ul>\n' +
                    '            </div>';
                texteListeCategories+='</div>'
            }
            liste.innerHTML = texteListeCategories;

        };
    };




})();

