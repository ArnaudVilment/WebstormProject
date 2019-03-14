let nombreSaisi1 = "";
let nombre1 = 0;
do {
    nombreSaisi1 = prompt("Veuillez saisir le nombre 1");
    nombre1 = parseInt(nombreSaisi1);
}while (isNaN(nombre1) === true);

let operation = "";
do {
    operation = prompt("Veuillez saisir une op:");
}while (
    operation !== "+"
    && operation !== "-"
    && operation !== "/"
    && operation !== "*"
    && operation !== "%"
    );

let nombreSaisi2 = "";
let nombre2 = 0;

do {
    nombreSaisi2 = prompt("Veuillez saisir le nombre 2");
    nombre2 = parseInt(nombreSaisi2);
}while (isNaN(nombre2) === true);

if(operation === "+"){
    console.log("Addition");
    console.log(nombre1 + nombre2);
}else if(operation === "-"){
    console.log("Soustraction");
    console.log(nombre1 - nombre2);
}else if(operation === "*"){
    console.log("Multiplication");
    console.log(nombre1 * nombre2);
}else if(operation === "/"){
    console.log("Division");
    console.log(nombre1 / nombre2);
}else if(operation === "%"){
    console.log("Modulo");
    console.log(nombre1 % nombre2);
}