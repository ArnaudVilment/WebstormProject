console.log("OK.");

let toutesLesImages =
    document.getElementsByClassName("image");

console.log(toutesLesImages);
toutesLesImages[0].style.display = "inline";

let compteur = 0;

let suivantBtn = document.getElementById("suivant");
suivantBtn.onclick = function () {
    compteur++;
    console.log("Suivant " + compteur);
    if(compteur === toutesLesImages.length)
        compteur = 0;
    for (let i = 0; i <toutesLesImages.length ; i++) {
        if(i === compteur){
            toutesLesImages[i]
                .style
                .display =
                "inline";
        }else{
            toutesLesImages[i]
                .style
                .display = "none";
        }

    }

}

let precedantBtn = document.getElementById("precedant");
precedantBtn.onclick = function () {
    compteur--;
    console.log("Precedant " + compteur);
    if(compteur < 0)
        compteur = toutesLesImages.length -1;
    for (let i = 0; i <toutesLesImages.length ; i++) {
        if(i === compteur){
            toutesLesImages[i]
                .style
                .display =
                "inline";
        }else{
            toutesLesImages[i]
                .style
                .display = "none";
        }

    }

}