// je m'assure que le DOM est bien chargé. "onload" signifie après chargement
window.onload = function() {
    console.log("dans le script memo.js");

    class Card {
        constructor(question, answer) {
            // initialisation des propriétés question et answer
            this.question = question;
            this.answer = answer;

            // création de l'élément du dom de la carte
            this.card_article_elt = document.createElement("article");
            
            // création de l'élément du dom correspondant au bouton supprimer
            this.card_delete_elt = this.createElementWithText("button", "Supprimer");

            // appel de la méthode dessinerCarte()
            this.dessinerCarte();

            // On relie le gestionnaire d'événement à l'objet carte
            // car par défaut il est lié à l'objet (ici le bouton supprimer)
            // qui l'appelle
            this.supprimerCarte = this.supprimerCarte.bind(this);
            
            // gestion de l'événement click sur le bouton supprimer
            this.card_delete_elt.onclick = this.supprimerCarte;// pas de parenthèse car asynchrone
        }
        // Méthode qui dessine la carte
        dessinerCarte() {
            console.log("dans dessinerCarte");
            console.log("this.card_article_elt : ", this.card_article_elt);


            // création des éléments du dom de chaque carte ()
            const card_question_elt = this.createElementWithText("h2", this.question);
            const card_answer_elt = this.createElementWithText("p", this.answer);
            
            // Ajout dans le dom les éléments nouvellement créés
            this.card_article_elt.appendChild(card_question_elt);
            this.card_article_elt.appendChild(card_answer_elt);
            this.card_article_elt.appendChild(this.card_delete_elt);
            this.cards_elt.appendChild(this.card_article_elt);
        }
        /**
         * Suppression de l'élément du dom card_article_elt
         * Attention par défaut comme supprimerCarte est appelé 
         * par le bouton supprimer, il devient 
         * @param {*} event 
         */
        supprimerCarte(event) {
            console.log("Dans supprimerCarte");
            console.log("this : ", this);
            // supprimer l'élément carte du dom  (removeChild)
            this.card_article_elt.parentNode.removeChild(this.card_article_elt);
        }
         /**
         * Méthode pour créer une élément du DOM et lui ajouter du texte
         * @param {string} markup 
         * @param {string} txt 
         */
        createElementWithText(markup, txt) {
            // création de l'élément du dom
            const elt = document.createElement(markup);
            // ajout du texte à l'élément du DOM fraîchement créé
            elt.textContent = txt;
            return elt;
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