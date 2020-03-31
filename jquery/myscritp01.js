// Première utilisation de jquery : en lui donnant 
// une fonction anonyme en argument
//  - Cloisonne le code
//  - Attend que le dom soit chargé
//  - S'assure que $ est bien un alias de jQuery

jQuery(function ($) {
    console.log("jQuery chargé");

    // Deuxième utilisation de jQuery (alias $)
    // en lui donnant en argument un selecteur css
    // Récupère l'élément (ou les éléments) du dom et l'enrichit de 
    // beaucoup de propriétés (dont des méthodes)
    let p1 = jQuery("#p1");

    // Exemple avec chaînage de méthodes applicables à un élément du dom jquery 
    p1.hide(5000).show(300); // cache l'élément en 5 secondes et l'affiche en 3 secondes

    // Troisième utilisation de jQuery
    // en lui donnant en argument du html : permet de créer un élément du dom
    // on peut chaîner les méthodes car elles renvoient toutes les deux 
    // l'objet jquery (élément du dom augmenté)
    let p2 = jQuery("<p>Paragraphe 2</p>").appendTo("body");

    let p2_text = p2.text();
    // Exemple de getter : méthode text() utilisé sans argument
    console.log("Contenu textuel de p1 : ", p1.text()); // va afficher dans la console paragraphe 2
    console.log("Contenu textuel de p2 : ", p2_text); // va afficher dans la console paragraphe 2

    // Exemple de setter : méthode text("test") utilisé avec un argument
    p2.text("Texte qui vient remplacer l'ancien texte de p2");

    // Exemple de getter : val()
    let value_hello = $("#hello").val();
    console.log(value_hello);

    // Exemple de setter : val("Salut")
    $("#hello").val("Salut");

    // exemple de setter css({json})
    p2.css({
        "background-color": "yellow",
        "font-weight": "bold",
        "padding": "10px"
    });

    // exemple de setter sur plusieurs éléments
    $("ul > li").css({
        "background-color": "grey",
        "font-weight": "bold",
        "padding": "10px",
        "list-style": "none"
    });

    // Parcours des éléments du dom qui correspondent au sélecteur (ici ul > li)
    $("ul > li").each(function (index) {
        console.log("index : ", index);
        
        // on peut retrouver chaque élément du dom augmenté avec $(this)
        if (index == 2) $("<li>avant le 3ième élément</li>")
        .insertBefore($(this))
        .on("click", function () {
            console.log($(this).text());
        });
        
        // on ajoute un gestionaire d'événement pour chaque élément de la liste
        $(this).on("click", function () {
            console.log($(this).text());
        });

    });



});