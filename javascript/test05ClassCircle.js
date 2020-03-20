// Fonction anonyme immédiate IIFE avec le mode strict
"use strict";
(function () {
    class Circle {
        constructor (nom, rayon) {
            this.nom  = nom;
            this.rayon = rayon;

        }
        // en dehors du constructeur, on ajoute les propriétés 
        // de type "function" directement au prototype du 
        // constructeur cirle
        
        // propriété de type function (méthode)
        aire() {
            console.log("Aire : " + this.pi * this.rayon * this.rayon);
        }
    } 
    // Pour ajouter une propriété qui ne soit pas une méthode
    // il faut revenir à l'ancien système en dehors de la class
    Circle.prototype.pi = 3.14; 
    
    let petit_cercle = new Circle("petit cercle", 10);
    console.log(petit_cercle);
})();
