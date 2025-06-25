//Verificar se existem itens no localStorage
if(localStorage.getItem('cadastros')!=null & localStorage.getItem('cadastros')!=[]){
    const lista = document.createElement('ul');
    const formulario = document.getElementById('formulario');
    formulario.appendChild(lista);
}

function CriarItem(){
    
}
//verificar se existe intens em localStorage.getItem('cadastros')
//caso haja, criar ul e com calores de li
//senão nem cria pfvr

// Limpar campos de entrada
const entradaNome = document.getElementById("nome");
const entradaEmail = document.getElementById("email");

const limpar = document.getElementById("clear");

limpar.addEventListener('click', ()=>{
    entradaNome.value = "";
    entradaEmail.value = "";
});



// Cadastrar 
function Cadastrar(){
    let nome = entradaNome.value;
    let email = entradaEmail.value;
    console.log(1);
    const btnCadastrar = document.getElementById('cadastrar');

    btnCadastrar.addEventListener('click', ()=>{
        const data = new Date();
        const dia = data.getDate();
        const mes = data.getMonth() + 1; //não sei pq mas tava dando maio como o mês
        const ano = data.getFullYear();
        let datas = `${dia}/${mes}/${ano}`;
        //Verifica se usuário entrou com algo nos campos de entrada
        if(nome!="" & email!=""){
            let cadastroLocal = localStorage.getItem('cadastros');
            cadastroLocal = JSON.parse(cadastroLocal) || [];
            let novoCadastro = {data:datas,nome:nome,email:email};
            cadastroLocal.push(novoCadastro);
            dados = JSON.stringify(cadastroLocal);
            local = localStorage.setItem('cadastros', dados);
        }
    });
}

//Limpar
function Limpar(){
    const btnLimpar = document.getElementById('limpar');

    btnLimpar.addEventListener('click', ()=>{
        localStorage.clear();
    });
}

//Excluir
function Excluir(){
    const btnExcluir = document.getElementById('excluir');
    let nome = entradaNome.value;
    let email = entradaEmail.value;

    btnExcluir.addEventListener('click', ()=>{
        local = localStorage.getItem('cadastros');
        console.log(local);
        local = JSON.parse(local);
        const localExcluido = local.filter(item => item.nome === nome);
        local = JSON.stringify(localExcluido);
        console.log(local);
        localStorage.setItem('cadastros', local);
    });
}

//puxar do localStorage, fazer virar uma lista
//verificar se o que foi colocado com entrada está na lista (iterar com .forEach())
//guardar ela como excluido
//excluir com localStorage.removaItem("cadastros", excluido);

//Pesquisar
function Pesquisar(){

}