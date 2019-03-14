let btChat = document.getElementById("chat")


btChat.onclick = function () {
    console.log("Chat");
    let image =
        document.getElementById("image");
    image.setAttribute("src", "../images/chat.jpg");

}

let btChien = document.getElementById("chien");


btChien.onmousemove = function() {
    console.log("Chien");
    let image =
        document.getElementById("image");
    image.setAttribute("src", "../images/chien.png");
    /* image.src = "../images/chien.png"; ou ca */

}

/*let btCheval = document.getElementById("cheval");
    btCheval.onclick = modifyImage("../images/cheval.jpg");


function modifyImage(lienImage) {
    let image =
        document.getElementById("image");
    image.setAttribute("src", lienImage);

    return;
}*/