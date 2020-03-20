// Fonction anonyme immédiate IIFE avec le mode strict
"use strict";
(function () {
    // Une constante en js ne peut pas être
    // réassignée
    const fruits = ["Banane", "Cerise", "Pomme"];
    /* console.log(fruits);
    console.log("taille du tableau : ", fruits.length);
    console.log(fruits[0]); 
    console.log(fruits[2]); 
 
    // dernier élément 
    console.log(fruits[fruits.length - 1]); */

    // ajouter un élément en fin de tableau
    fruits.push("Poire");

    // Effacer le deuxième élément 
    fruits.splice(1, 1);

    // Boucler sur un tableau
    /* for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    } */
    // La méthode forEach attend en paramètre une fonction (anonyme ici)
    fruits.forEach(test => {
        console.log("Dans forEach", test); // Apple 0 puis // Banana 1
      });

    // Chercher l'index d'un élément 
    let cerise_index = fruits.indexOf("Cerise");
    console.log("index de cerise : ", cerise_index);

    console.log(fruits);



})();
