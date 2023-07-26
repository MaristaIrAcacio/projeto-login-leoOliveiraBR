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
        dadoslista.push(nomeUser);  criaLista();
        document.getElementById("nomeUser").value = '';
        }else{
            alert("usuario, por favor preencher o campo nome");
        }
    }



// FUNÇÃO PARA CRIAÇÃO DE LISTA NA TABELA
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>nomeUsuario</th><th>açôes</th></tr>";

    // LAÇO DE REPETIÇÃO PARA COLOCAR NOMES NA TABELA 
    for(let i=0; i <= (dadoslista.length-1); i++){
        tabela += "<tr><td>" + dadoslista[i] + "</td><td><button class='btn btn-success'onclick'editar(this.parentNode.parentNode.rowIndex)'>Editar<button><button class='btn btn-danger'onclick'excluir(this.parentNode.parentNode.rowIndex'>Excluir</button></td></tr>";
              document.getElementById("tabela"). innerHTML = tabela;
    }

}

//função para editar nome
function editar(i){
    document.getElementById("nomeUser").value = dadoslista[(i - 1)];
    dadoslista.splice(dadoslista[(i - 1)], 1);
}

//função excluir 
function Excluir(i){
dadoslista.splice(dadoslista[(i - 1)], 1);
document.getElementById('tabela').deletaRow(i);
}