// Fonction anonyme immédiate IIFE avec le mode strict
"use strict";
(function () {
    // Attention, le dom ne se charge complètement que lorsque
    // la page html est comlètement chargée
    console.log(document);


    // la façon historique d'atteindre un élément est d'utiliser son id
    const hello = document.getElementById("hello");
    console.log(hello);

    // Création d'un élément du DOM
    const section = document.createElement("section");
    // ajout d'un texte
    section.textContent = "Texte ajouté par le js.";
    // ajout d'un attribut
    section.setAttribute("id","first-section");
    // placement de l'élément dans le DOM de la page
    window.document.body.appendChild(section);

    // QuerySelector
    // récupération d'un élément avec querySelector
    const bob = document.querySelector(".bob");
    console.log("bob: ", bob);
    // récupération de plusieurs éléments avec querySelectorAll
    const bobs = document.querySelectorAll(".bob");
    console.log("bobs: ", bobs);

    // Elément suivant l'élément d'id hello
    const next = hello.nextElementSibling;
    console.log("next : ", next);

})();
