jQuery(function ($) {
    console.log("Dans titre_paragraphe.js");
    /* Exercice : faire en sorte que dans un premier temps, tous les paragraphes
    soient cachés et qu'ils s'affichent au click sur le titre correspondant.
    Dans un deuxième temps,faire en sorte que les paragraphes s'affichent ou
    se cache après un click sur le h2 correspondant (cf toggle) */

    // faire que tous les paragraphes soient cachés et qu'ils s'affichent au titre correspondant
    $("div > p").hide();

    // ajouter un gestionnaire d'événement sur les h2
    $("h2").each(function (index, element) {
        $(this).on("click",() => {
            $(this).next("p").slideToggle(1000);
        })
    });

});