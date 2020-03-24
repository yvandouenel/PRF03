"use strict";
(function(){
    console.log("dans le script convertisseur");

    // récupération de l'élément formulaire
    const form = document.getElementById("form-convert");

    // Gestion de l'événement de soumission du formulaire 
    form.onsubmit = function(event) {
        // supression du rechargement de la page qui est le comportement 
        // par défaut 
        event.preventDefault();

        // récupération des données du champ euro
        let euro = document.getElementById("euro").value;
        console.log("champ euro : ", euro);

        // conversion
        let chf = convert(euro, "chf");
        console.log("francs suisse : ", chf);

        // écriture du résultat dans le champ chf
        document.getElementById("chf").value = chf; 
    }
    /**
     * 
     * @param {number} amount - montant
     * @param {string} currency - resultat attendu dans la monnaie "currency"
     */
    function convert(amount, currency) {
        let result = 0;
        if(currency == "euro") {
            result = (amount / 1.06);
        } else result = (amount * 1.06);

        return result;
    }
})();