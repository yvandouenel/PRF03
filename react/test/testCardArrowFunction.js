class Card {
  // constructeur
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;

    // dessin de la carte
    this.dom_question = document.createElement("h2");
    this.drawCard();

    // Gestion du click sur la question
    this.dom_question.onclick = this.handleClickEvent; // pas de parenthèse car asynchrone
  }
  // arrow function : le this est automatiquement
  // l'instance de la class dans laquelle se trouve la méthode
  // ici "Card"
  handleClickEvent(e) {
    console.log("dans handleClickEvent");
    console.log("this dans handleClickEvent", this);
    this.alertHelloWorld();
  }
  alertHelloWorld() {
    console.log("Hello World");
  }
  drawCard() {
    const dom_card = document.createElement("article");

    this.dom_question.textContent = this.question;
    const dom_answer = document.createElement("p");
    dom_answer.textContent = this.answer;

    // ajout des éléments du dom dans le dom
    document.body.appendChild(dom_card);
    dom_card.appendChild(this.dom_question);
    dom_card.appendChild(dom_answer);
  }
}
// Création de la carte
const c1 = new Card("Nom du créateur du web", "Tim Berners-Lee");
