var VueListeProduits = (function () {
    navbar = document.getElementById("navbar").innerHTML;
    pageListeProduits = document.getElementById("page-liste-produits").innerHTML;

    return function () {

        this.afficher = async function () {
            console.log("affichage");
            //TODO: var resultatQuery = await produitDAO.nomMethode();
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = navbar + pageListeProduits;
            var liste = document.getElementById("accordeon-categories");
            var texteListeCategories = liste.innerHTML;
            for (let i = 0; i < 3; i++) {
                texteListeCategories+= '<div class="card">\n' +
                    '            <div class="card-header" id="heading'+i+'">\n' +
                    '                <h2 class="mb-0">\n' +
                    '                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="false" aria-controls="collapse'+i+'">\n' +
                    '                        Vêtements\n' +
                    '                    </button>\n' +
                    '                </h2>\n' +
                    '            </div>'+'' +
                    '<div id="collapse'+i+'" class="collapse " aria-labelledby="heading'+i+'" data-parent="#accordeon-categories">\n' +
                '                <ul class="list-group">\n';
                for (let j = 0; j < 5 ; j++) {
                    texteListeCategories+='' +

                        '                    <li class="list-group-item">\n' +
                        '                        <div class="row justify-content-center align-items-center">\n' +
                        '                        <div class="col-l2">\n' +
                        '                            <img src="https://via.placeholder.com/150" width="50" height="50">\n' +
                        '                        </div>\n' +
                        '                        <div class="col-6">\n' +
                        '                            Nom du produit\n' +
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
                texteListeCategories += '<li class="list-group-item list-group-item-action list-group-item-success"><div class="row justify-content-center align-items-center"><div class="col-3"><button class="btn btn-success">Ajouter un produit</button></div></div></li>' +
                    '                </ul>\n' +
                    '            </div>';
                texteListeCategories+='</div>'
            }
            liste.innerHTML = texteListeCategories;
        }
    };

})();