//import de la class Card
import Card from "./Card.js";

window.onload = function() {
    console.log("Dans main.js");
    const new_card = new Card("Question", "Réponse");
    console.log(new_card);
}