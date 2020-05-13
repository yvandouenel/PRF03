const fruits = ["Banane", "Pomme", "kiwi"];
console.log("fruits : ", fruits);
// const liste_fruits = fruits.map(fruit => "<li>" + fruit + "</li>");
// Attention, si vous ne voyez pas d'accolades dans une fonction
// fléchée, c'est qu'elle retourne immédiatement quelque chose
const liste_fruits = fruits.map(fruit => `<li>${fruit}</li>`);
//console.log("liste_fruits : ", liste_fruits);

const index_kiwi = fruits.indexOf("kiwi");

const bob = {
  prenom: "Bob"
};
fruits.push(bob);
console.log(fruits);
const index_bob = fruits.indexOf(bob);
console.log("index_bob : ", index_bob);

// clonage de l'objet bob
const bob_bis = { ...bob };
console.log("bob_bis : ", bob_bis);

if (bob_bis == bob) console.log("Bob et bob_bis identiques");
else console.log("Bob et bob_bis différents");

let i = -4; // considéré comme vrai car différent de 0
let j = "sqdf";
{
  i && console.log("Hello sous condition");
}
if (i) console.log("Hello sous condition avec if");

// objet décomposé
const p = { nom: "Dylan", prenom: "Bob", age: 87 };
// récupération des propriétés d'un objet de façon classique
// const prenom = p.prenom;
// const nom = p.nom;

const { nom, prenom, age } = p;

console.log(`Je m'appelle ${prenom} ${nom} et j'ai ${age} ans`);

for (let l = 0; l < 10; l++) {
  if (!(l % 2)) console.log(l, "pair");
  else console.log(l, "impair");
}
