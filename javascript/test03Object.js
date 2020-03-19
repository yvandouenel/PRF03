// Fonction anonyme immédiate IIFE avec le mode strict
"use strict";
(function () {
   // création d'un constructeur de Personne
   function Personne(n,p) {
       // propriétés de type string
       this.nom = n;
       this.prenom = p;

       // propriété de type méthode
       this.sePresenter = function() {
           console.log("Bonjour, je m'appelle " + this.prenom);
           console.log("this dans  la méthode sePresenter", this);
       }
       
   }
   let bob = new Personne("Dylan", "Bob");
   let jim = new Personne("Morison", "Jim");
   console.log(bob);
   console.log(jim);
   jim.sePresenter(); 

})();
console.log("this dans le contexte global", this);