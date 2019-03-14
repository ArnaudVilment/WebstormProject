console.log("Chargement OK.")

let nombre = 207;
let chaine = "207";

console.log(nombre == chaine); // true
console.log(nombre === chaine) // false

let chaineBonjour = "Bonjour";

console.log(chaineBonjour.length);

console.log(chaineBonjour.toLowerCase());

console.log(chaineBonjour.toUpperCase());

console.log(chaineBonjour.endsWith("e"));

console.log(chaineBonjour.startsWith("Bo"));

if(chaineBonjour.startsWith("Bon")){
    console.log("chaineBonjour commence par bon");
}
if(chaineBonjour.endsWith("jour")){
    console.log("chaineBonjour se termine par jour");
}