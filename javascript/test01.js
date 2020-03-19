// initialisation et affectation d'une valeur 12 sans spécifier 
// le type
/* let i = 0;
let j = false;
let k = "Hello";

console.log("Hello World");
console.log(i);
console.log(typeof(i));
console.log(typeof(j));
console.log(typeof(k));
let l;
console.log(l);
let m = null;
console.log(typeof(m));

const n = 50;
console.log(n); */
//n = 30; // je n'ai pas le droit de réaffecter une const 
let j = 40;
{
    let i = 5;
    let k = 70;
    console.log("valeur de i dans le bloc : " + i);
    console.log("valeur de j dans le bloc : " + j);
}

//console.log("valeur de i dans le contexte d'exécution global : " + i);
console.log("valeur de j dans le contexte d'exécution global : " + j);
console.log("valeur de k dans le contexte d'exécution global : " + k);
