//Verificar se existem itens no localStorage
if(localStorage.getItem('cadastros')!=null && localStorage.getItem('cadastros')!='[]'){
    const lista = document.createElement('ul');
    lista.id = 'lista';
    const formulario = document.getElementById('formulario');
    formulario.appendChild(lista);
    let local = localStorage.getItem('cadastros');
    local = JSON.parse(local);
    local.forEach(element => {
        let itens = document.createElement('li');
        itens.dataset.data = element.data;
        itens.dataset.nome = element.nome;
        itens.dataset.email = element.email;
        itens.innerHTML = `data: ${element.data}, nome: ${element.nome}, email: ${element.email}`;
        lista.appendChild(itens);
    });
}

function AtualizarLista(){
    let local = localStorage.getItem('cadastros');
    local = JSON.parse(local);

    if(local != null && local != "[]"){
        const lista = document.getElementById('lista');
        lista.innerHTML = "";
        console.log(local);
        local.forEach(element => {
            let itens = document.createElement('li');
            itens.dataset.data = element.data;
            itens.dataset.nome = element.nome;
            itens.dataset.email = element.email;
            itens.innerHTML = `data: ${element.data}, nome: ${element.nome}, email: ${element.email}`;
            lista.appendChild(itens);
        });
    }
    else{
        console.log("lista não existe");
    }
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
const btnCadastrar = document.getElementById("cadastrar");

btnCadastrar.addEventListener('click', ()=>{
    const nome = entradaNome.value;
    const email = entradaEmail.value;

    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1; //não sei pq mas tava dando maio como o mês
    const ano = data.getFullYear();
    let datas = `${dia}/${mes}/${ano}`;

    //Verifica se usuário entrou com algo nos campos de entrada
    if(nome!="" && email!=""){
        let cadastroLocal = localStorage.getItem('cadastros');
        cadastroLocal = JSON.parse(cadastroLocal) || [];
        if(cadastroLocal==null || cadastroLocal=='[]'){
            const lista = document.createElement('ul');
            lista.id = 'lista';
            const formulario = document.getElementById('formulario');
            formulario.appendChild(lista);
        }
        let novoCadastro = {data:datas,nome:nome,email:email};
        cadastroLocal.push(novoCadastro);
        dados = JSON.stringify(cadastroLocal);
        local = localStorage.setItem('cadastros', dados);
        AtualizarLista();
    }
});

//Limpar
const btnLimpar = document.getElementById('limpar');

btnLimpar.addEventListener('click', ()=>{
    localStorage.clear();
    AtualizarLista();
});


//Excluir
const btnExcluir = document.getElementById('excluir');

btnExcluir.addEventListener('click', ()=>{
    let nome = entradaNome.value;
    let email = entradaEmail.value; 

    local = localStorage.getItem('cadastros');
    console.log(local);
    local = JSON.parse(local);
    local = local.filter(item => !(item.nome === nome && item.email === email));
    local = JSON.stringify(local);
    console.log(local);
    localStorage.setItem('cadastros', local);
    
    AtualizarLista();
});

//Pesquisar
btnPesquisar = document.getElementById('pesquisar');

btnPesquisar.addEventListener('click',()=>{
    const itens = document.getElementsByTagName('li');
    const nome = entradaNome.value;
    for(i=0; i<itens.length; i++) itens[i].hidden=false;
    for(i=0; i<itens.length; i++){
        const valores = {
            data: itens[i].dataset.data,
            nome: itens[i].dataset.nome,
            email: itens[i].dataset.email
        };
        if(valores.nome!=nome){
            itens[i].hidden = true;
        }
        console.log(typeof(valores), valores);
    }    
});
