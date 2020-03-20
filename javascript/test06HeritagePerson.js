// Fonction anonyme immédiate IIFE avec le mode strict
"use strict";
(function () {
    // création de la class Person
    class Person {
        constructor(nom, prenom) {
            this.nom = nom;
            this.prenom = prenom;
        }

        // Méthode ajoutée automatiquement au prototype de Person
        sePresenter() {
            console.log("Bonjour, je m'appelle " + 
            this.prenom + " " + this.nom);
        }
    }
    const p1 = new Person("Berners-Lee", "Tim");
    p1.sePresenter();
    console.log(p1);

    // création de la class circassien
    class Circassien extends Person {
        constructor(nom, prenom, discipline) {
            super(nom, prenom);
            this.discipline = discipline;
        }
        // ajout d'une méthode spécifique aux circassiens
        seProduire() {
            console.log("Je me produis bientôt.");
            console.log("Vous verrez mes compétences de " + this.discipline);
        }
    }
    const c1 = new Circassien("Bozo", "Jojo", "jongleur");
    c1.sePresenter();
    c1.seProduire();
    console.log(c1);
})();
