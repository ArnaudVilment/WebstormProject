console.log("OK.");

document.write("Hello with javascript");
document.write("Ceci est un texte ecrit aevc du JS ");
document.write("Mais y'a pas de retour à la ligne !!!!!");
document.write("mais, si il peut mettre des retour à la ligne,\n la preuve!!!!");
document.write("oops, je veux dire <br/>comme ça");

document.write("<h1>Un autre titre avec JS </h1>");

let h1 =document.getElementById("titreH1");
console.log(h1);
console.log(h1.innerText);
h1.innerText = "hello";

let paraph = document.getElementById("paraph");
console.log(paraph);
console.log(paraph.innerHTML);
paraph.innerHTML = "The most common way to access an HTML element is to use the id of the element.";

paraph.innerHTML = "un autre paragraphe";

let paras = document.getElementsByClassName("paragraphes");
console.log(paras);

paras[0].innerHTML = "Je remplace le contenue du premier paragraphe.";
paras[1].innerHTML = "JE remplace aussi celui du paaragraphe 2";

for (let i = 0; i < paras.length ; i++) {
    paras[i].innerHTML = "Même texte pour tout le monde";
}