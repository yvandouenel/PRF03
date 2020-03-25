console.log("Dans fetch.js");

fetch("http://www.coopernet.fr/rest/session/token/")
  .then(function(response) {
    if (response.status !== 200) { // si ça c'est mal passé
      console.error(
        "Erreur - statut : " + response.status
      );
      return; // ne renvoie ni promesse ni donnée
    }
    return response.text(); // renvoie une promesse
  })
  .then(function(data) { // data correspond au retour du résolve (ici deux lignes au dessus)
    console.log("Token récupéré : ", data);
  })
  .catch(error => {console.log("Erreur attrapée : ", error)});