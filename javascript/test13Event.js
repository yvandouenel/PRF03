// Fonction anonyme immédiate IIFE avec le mode strict
"use strict";
(function () {
    const hello = document.getElementById("hello");
    // attache un gestionnaire assynchrone de l'événement 
    // "onclick" sur l'élément hello
    // Attention, par nature la gestion des événements est asynchrone
    // Par défaut et par convention, les fonctions gestionnaires d'événements
    // attendent comme premier paramètre l'object event
    hello.onclick = function(e) {
        handleClick(e,"toto");
        handleClick(e,"toto");
    };

    function handleClick(event, toto) {
        console.log("Paragraphe hello cliqué");
        console.log("event : ", event);
        console.log("toto : ", toto);
        console.log("Source de l'événement : ", event.target);
    }

})();
