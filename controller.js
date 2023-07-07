function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
       window.location.href = "aula2.html";
    }
}

// cria lista de usuario dentro de um array

var dadoslista = [];

function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){
        dadoslista.push(nomeUser);
        console.log(dadoslista);
    }

}