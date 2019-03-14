console.log("OK");


function validerForm() {
    let emailElement =
        document.getElementById("email");
    let email = emailElement.value;

    if(email === ""
        || !email.includes("@")
        || !email.endsWith(".fr")
    ){
        console.log("Adresse mail non valide");
        emailElement.classList.add("erreur");
    }else{
        emailElement.classList.remove("erreur");
    }


    let nomElement = document.getElementById("nom");
    let nom = nomElement.value;
    if(nom === ""){
        nomElement.classList.add("erreur");
    }else{
        nomElement.classList.remove("erreur");
    }

    // check prenom
    let prenomBlock =
        document.getElementById("prenom");
    let prenom = prenomBlock.value

    if(prenom === ""){
        prenomBlock.classList.add("erreur");
    }else{
        prenomBlock.classList.remove("erreur");
    }

    // check phone
    let phoneBlock =
        document.getElementById("telephone");
    let phone = phoneBlock.value;
    if(
        phone === ""
        || !phone.startsWith("0")
        || phone.length != 10
    ){
        phoneBlock.classList.add("erreur");
    }else{
        phoneBlock.classList.remove("erreur");
    }
}