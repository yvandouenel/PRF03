// Class exportable (c'est à dire utilisable dans 
// des scripts qui l'importent)
export default class Card {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}