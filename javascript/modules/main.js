//import de la class Card
import Card from "./Card.js";
//import { pi, nb_or } from "./consts.js";
import * as consts from "./consts.js";
// exemple de propriété privée (store)
import store from "./store.js";
window.onload = function () {
  console.log("Dans main.js");
  const new_card = new Card("Question", "Réponse");
  console.log(new_card);
  console.log("pi : ", consts.pi);
  console.log("nb_or : ", consts.nb_or);

  let state = 1;
  store.state = 12;
  console.log("store.state : ", store.getState());
  console.log("store.state : ", store.state);
}
