// Fonction anonyme immédiate IIFE avec le mode strict
"use strict";
(function () {
    function Cercle(rayon, nom) {
        this.rayon = rayon;
        this.nom = nom;
        this.py = 3.14;

        this.aire = function () {
            console.log("Aire de " + this.nom +
                " : " + this.py * this.rayon * this.rayon);
        }
    }
    let petit_cercle = new Cercle(10, "petit cercle");
    petit_cercle.aire();
    let grand_cercle = new Cercle(100, "grand cercle");
    grand_cercle.aire();

})();
