console.log("Le fichier js a été chargé")
let nombre = 500;

/*
 * Condition if
 * if(condition){
 *      traitement
 * }
 */

/*
 * Condition if else
 * if(condition){
 *      traitement 1
 * } else {
 *      traitement 2
 * }
 */
if (nombre === 50) {
    console.log("50 = " + nombre);
} else {
    console.log("50 != " + nombre);
}

/*
 * condition if else if .... else
 * if(condition1){
 *      traitement 1
 * } else if(condition2){
 *      traitement 2
 * } else {
 *      traitement x
 * }
 */

let age = 18;

if (age > 18) {
    console.log("Vous avez plus de 18 ans");
} else if (age < 18) {
    console.log("Vous avez moins de 18 ans");
} else {
    console.log("Vous avez 18 ans");
}

/*
 * > Strictement supérieur
 * < Strictement Inférieur
 * >= Supérieur ou égal
 * <=
 * === ou ==
 * !== ou !=
 *
 */

let nom = "azerty";
if (nom !== "azerty") {
    console.log("Vous n'êtes pas azerty");
} else {
    console.log("Bonjour Mr azerty");
}

let nombreSaisi1 = prompt("Veuillez saisir le nombre 1");
let operation = prompt("Veuillez saisir l'opération");
let nombreSaisi2 = prompt("Veuillez saisir le nombre 2");

let nombre1 = parseInt(nombreSaisi1);
let nombre2 = parseInt(nombreSaisi2);

switch (operation) {
    case "+":
        console.log("Addition");
        console.log(nombre1 + nombre2);
        break;
    case "-":
        console.log("Soustraction");
        console.log(nombre1 - nombre2);
        break;

    case "*":
        console.log("*");
        console.log(nombre1 * nombre2);
        break;
    case "/":
        console.log("/");
        console.log(nombre1 / nombre2);
        break;

    default:
        console.log("L'opération n'existe pas ");
        break;
}

let noteAvecSwitch = 10;
switch (noteAvecSwitch) {
    case 10:
        console.log("Vous avez eu 10");
        break;
    case 15:
        console.log("15");
        break;
    case 14:
        console.log("14");
        break;
    case 12:
        console.log("12");
        break;
    default:
        console.log("Aucune des valeurs");
        break;
}

/*
 * switch (variable) {
 *   case [valeur1]:
 *      traitement;
 *       break;
 *  case [valeur2]:
 *      traitement;
 *       break;
 *  default:
 *      traitement par defaut
 *      break;
 */

let note = 8;
if(note > 0 && note <= 5){
    console.log("A l'année prochaine")
}else if(note > 5 && note <= 10){
    console.log("Presque");
}else if(note > 10 && note <= 15){
    console.log("Bien");
}else if(note > 15 && note <= 20){
    console.log("TBien");
}else{
    console.log("Impossible");
}

/*
 * && ET
 * || OU
 */