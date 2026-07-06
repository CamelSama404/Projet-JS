const info = document.querySelector(".infos");

function val(result){
    info.innerText = "";
    form.fenetre.value +=  result;
}

function calcule(){
    if(form.fenetre.value === ""){
        info.innerText = "Veuillez entrer un chiffre !";
        return;
    }
    else{
        try{
            form.fenetre.value = eval(form.fenetre.value);
            info.innerText = "";
        }
        catch(error){
            info.innerText = "Erreur de syntaxe";
        }
    }
}

function supprAll(){
    info.innerText = "";
    form.fenetre.value = "";
}

function suppr(){
    info.innerText = "";
    form.fenetre.value = form.fenetre.value.slice(0, -1);
}