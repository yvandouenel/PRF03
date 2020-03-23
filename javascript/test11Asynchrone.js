// Fonction anonyme immédiate IIFE avec le mode strict
"use strict";
(function () {
    console.log("ligne 4");
    // () impliquent un appel immédiat

    // la fonction anonyme est non bloquante ou asynchrone car appelée sans parenthèse
    // on donne à setTimeout une référence à la fonction
    setTimeout(function() { hello("bob"); }, 2000); 
    console.log("ligne 6");


    function hello(prenom) { // le hosting (hissage) permet d'appeler cette fonction avant sa déclaration
        console.log("Hello", prenom);
    }
})();
