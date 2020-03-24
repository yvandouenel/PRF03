// je m'assure que le DOM est bien chargé
window.onload = function() {
    console.log("dans le script memo.js");

    class Card {
        constructor(question, answer) {
            // initialisation des propriétés question et answer
            this.question = question;
            this.answer = answer;

            // appel de la méthode dessinerCarte()
            this.dessinerCarte();
        }
        // Méthode qui dessine la carte
        dessinerCarte() {
            console.log("dans dessinerCarte");

            // création des éléments du dom
            const card_article_elt = document.createElement("article");

            const card_question_elt = document.createElement("h2");
            card_question_elt.textContent = this.question;

            const card_answer_elt = document.createElement("p");
            card_answer_elt.textContent = this.answer;

            // Ajout dans le dom les éléments nouvellement créés
            card_article_elt.appendChild(card_question_elt);
            card_article_elt.appendChild(card_answer_elt);
            this.cards_elt.appendChild(card_article_elt);

        }
    }
    // Ajout au prototype du constructeur Card l'élément
    // qui est le parent de toutes les cartes
    Card.prototype.cards_elt = document.getElementById("cards");

    // gestion de l'événement onsubmit du formulaire
    const form = document.getElementById("form");
    form.onsubmit = function(event) {
        // on empêche le rechargement de la page
        event.preventDefault();

        // récupération des données
        let question_text = document.getElementById("question").value;
        let answer_text = document.getElementById("answer").value;

        // Création de la carte
        let new_card = new Card(question_text, answer_text);
        console.log(new_card);
    }

}