// Fonction anonyme immédiate IIFE avec le mode strict
"use strict";
(function () {
    // variable de type primitif (string, number, boolean, undefined et null) : clonage à un instant t
    let i = 12;
    let j = i; // passage par valeur (par copie de la valeur)
    i = 30;
    console.log("i : ", i);
    console.log("j : ", j);

    // variable de type object : même objet qui a plusieurs noms (alias)
    const p = {
        firstname: "john"
    }
    const q = p; // passage par référence
    p.firstname = "Bob";
    q.firstname = "Simon";
    console.log("p : ", p);
    console.log("q : ", q);


})();
