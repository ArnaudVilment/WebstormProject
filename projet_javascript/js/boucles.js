console.log("OK");
console.log("La boucle WHILE");
/*
 * while (condition){
 *   traitement
 * }
 */
let cpt = 1;
while (cpt < 10) {
    console.log("bonjour " + cpt);
    cpt++;// cpt = cpt + 1;
}
let cpt1 = 1;
while (cpt1 <= 100) {
    console.log(cpt1);
    cpt1++;
}

let cpt2 = 100;
while (cpt2 > 0) {
    console.log(cpt2);
    cpt2--;
}

let cptAdd = 1;
let resultat = 0;
while (cptAdd <= 100) {
    resultat = resultat + cptAdd;
    // console.log(resultat);
    cptAdd++;
}
console.log("La somme des nombres de 1 à 100 => " + resultat);

let cptProd = 1;
let resultatProduit = 1;

while (cptProd <= 100) {
    resultatProduit = resultatProduit * cptProd;
    cptProd++;
}
console.log("Le produit des nombres entre 1 et 100 : " + resultatProduit);

console.log("===========================================================");
console.log("La boucle DO WHILE");
/*
 * do{
 *      traitement
 * } while (condition);
 */
let compteur = 0;
do {
    console.log("boucle infinie");
    compteur--;
} while (compteur >= 10);

console.log("===========================================================");
console.log("La boucle FOR");
/*
 * for(let i = 0 ; i < 10 ; i++){
 *      traitement
 * }
 */
for InitialisationDaoFactory
    console.log("boucle for " + i);
}

let resultatAdd50_100 = 0 ;
for(let i = 50 ; i <= 100 ; i++){
    resultatAdd50_100 = resultatAdd50_100 + i;
}

console.log("kla somme des nombres entre 50 et 100 : " + resultatAdd50_100);
