console.log("Chargement ok.");
/*
 * function nom_de_la_fonction([params]){
 *      traitements
 * }
 */

/*
 * function nom_fct(param){
 *      traitements
 * }
 */

/*
 * function nom_fonction(param1, param2,...,pamaN){
 *      traitements
 * }
 */
function hello(){
    console.log("Helloooooo tout le monde!!");
}

hello();// hello tout le monde!
hello();// hello tout le monde!

double(12); // 24
function double(nombre){
    console.log(nombre * 2);
}
double("hello"); // NaN
double(15);// 30
double(25 * 2); // 100

function bonjour(nom){
    console.log("Bonjour Mme/Mr : " + nom);
}

bonjour("azerty"); // Bonjour Mme/Mr azerty

function addition(nombre1, nombre2){
    console.log(nombre1 + nombre2);
}

addition(38,22); // 60

console.log("Exo Afficher nombre paire");

let tabNbPaire = [2, 3, 4, 6, 8, 5];
let sommeNbPaire = 0;

for(let i = 0 ; i <= tabNbPaire.length ; i++) {
    if (tabNbPaire[i] % 2 === 0) {
        sommeNbPaire = sommeNbPaire + tabNbPaire[i];
    }
}
console.log("Resultat somme nb paire :" + sommeNbPaire);