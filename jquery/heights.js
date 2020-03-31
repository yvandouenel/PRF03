jQuery(function ($) {
    let max_height = 0

    // récupération de la hauteur maximum en parcourant tous les éléments
    $("div.row > div").each(function (index) {
        console.log($(this).height());
        if($(this).height() > max_height) max_height = $(this).height();
        // autre façon de l'écrire - opérateur ternaire
        /* max_height = ($(this).height() > max_height) ? $(this).height() : max_height; */
    });
    console.log("max_height : ", max_height);

    // Changement de la hauteur de tous les éléments div qui sont les fils directs de div.row
    $("div.row > div").height(max_height);
});