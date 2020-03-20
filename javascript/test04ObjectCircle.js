// Fonction anonyme immédiate IIFE avec le mode strict
"use strict";
(function () {
    // constructeur de cercle
    function Circle(nom, rayon) {
        this.nom = nom;// récupère l'argument passé en paramètre
        this.rayon = rayon;
    }
    // Permet de donner à toutes les instances du constructeur
    // circle une valeur commune. Ici "pi"
    // Prototype est une propriété du constructeur qui est partagée
    // par toutes les instances issues de ce constructeur
    Circle.prototype.pi = 3.14;
    Circle.prototype.aire = function() {
        console.log("Aire : " + this.pi * this.rayon * this.rayon);
    }


    // Instanciation d'un cercle
    let petit_cercle = new Circle("petit cercle", 10); // Passage d'argument
    console.log("nom du cercle : ", petit_cercle.nom);
    console.log("méthode aire du cercle : ",petit_cercle.aire);
    petit_cercle.aire();
    // Instanciation d'un cercle
    let grand_cercle = new Circle("grand cercle", 100); // Passage d'argument
    console.log("nom du cercle : ", grand_cercle.nom);
    console.log("méthode aire du cercle : ",grand_cercle.aire);
    grand_cercle.aire();
    
})();
