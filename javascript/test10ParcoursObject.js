// Fonction anonyme immédiate IIFE avec le mode strict
"use strict";
(function () {
    // création d'un objet littéral
    const jc = {
        nom: "Dusse",
        prenom: "Jean-Claude",

        sePresenter: function(){
            console.log("Hello, je m'appelle : " + this.prenom);
        }
    }
    const jp = jc; // passage par référence
    if(jc == jp) console.log("Même objet");
    else console.log("Objets différents");

    // parcours d'un objet avec la boucle for in
    for(let key in jc) {
        console.log(key, " : ", jc[key], typeof(jc[key]));
        // comment faire pour appeler la méthode sePresenter en gardant
        // la syntaxe jc[cle] ?
        if(typeof(jc[key]) == "function") {
            jc[key](); // appel de fonction
        }
        
    }


})();
