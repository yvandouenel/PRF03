// Fonction anonyme immédiate IIFE avec le mode strict
"use strict";
(function () {
    let z = 3;
    //création d'une première fonction afficheDansConsole
    // qui attend un paramètre "text"
    function afficheDansConsole(text) {
        console.log(text);
    }

    // Appel de la fonction avec le paramètre "Hello World !"
    afficheDansConsole("Salut Bob");

    // Création de la fonction qui additionne deux nombres
    // et qui renvoie la somme

    function additionne(a, b) {
        let r = a + b;
        console.log("a dans la fonction additionne : ", a);
        return r;
    }

    // appel de la fonction additionne 
    let result = additionne(4, 88);
    console.log(result);

    let a = () => {
        console.log("Hello world dans la fonction a");
    }
    a();
})();
