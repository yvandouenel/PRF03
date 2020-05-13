//import de la class Card
import Card from "./Card.js";
//import { pi, nb_or } from "./consts.js";
import * as consts from "./consts.js";

window.onload = function () {
  console.log("Dans main.js");
  const new_card = new Card("Question", "Réponse");
  console.log(new_card);
  console.log("pi : ", consts.pi);
  console.log("nb_or : ", consts.nb_or);
}
