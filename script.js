//Verificar se existem itens no localStorage
if(localStorage.getItem('cadastros')!=null && localStorage.getItem('cadastros')!='[]'){
    const lista = document.getElementById('lista');
    lista.hidden = false;
    const formulario = document.getElementById('formulario');
    formulario.appendChild(lista);
    let local = localStorage.getItem('cadastros');
    local = JSON.parse(local);
    local.forEach(element => {
        let itens = document.createElement('li');
        itens.classList.add('texto');
        itens.dataset.data = element.data;
        itens.dataset.nome = element.nome;
        itens.dataset.email = element.email;
        itens.innerHTML = `data: ${element.data}, nome: ${element.nome}, email: ${element.email}`;
        lista.appendChild(itens);
    });
}
else{
    const lista = document.getElementById('lista');
    lista.hidden = true;
}

function AtualizarLista(){
    let lista = document.getElementById('lista');
    lista.hidden = true;

    let local = localStorage.getItem('cadastros');
    local = JSON.parse(local);


    if(local != null && local != "[]" && local != []){
        lista.hidden = false;
        lista.innerHTML = "";

        local.forEach(element => {
            let itens = document.createElement('li');
            itens.classList.add('texto');
            itens.dataset.data = element.data;
            itens.dataset.nome = element.nome;
            itens.dataset.email = element.email;
            itens.innerHTML = `data: ${element.data}, nome: ${element.nome}, email: ${element.email}`;
            lista.appendChild(itens);
        });
    }
}

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
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    let datas = `${dia}/${mes}/${ano}`;

    if(nome!="" && email!=""){
        let cadastroLocal = localStorage.getItem('cadastros');
        cadastroLocal = JSON.parse(cadastroLocal) || [];

        const emailJaExiste = cadastroLocal.some(cadastro => cadastro.email === email);

        if (emailJaExiste) {
            alert("Este e-mail já está cadastrado.");
            return; 
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
    let local = localStorage.getItem('cadastros');

    if(local != null && local != "[]" && local != []){
        console.log(local);
        local = JSON.parse(local);
        local = local.filter(item => !(item.nome === nome && item.email === email));
        local = JSON.stringify(local);
        console.log(typeof(local));
        localStorage.setItem('cadastros', local);

        if(local.length == 0) localStorage.clear();
        AtualizarLista();
    }
});

//Pesquisar
btnPesquisar = document.getElementById('pesquisar');

btnPesquisar.addEventListener('click',()=>{
    const itens = document.getElementsByTagName('li');
    
    const nome = entradaNome.value;

    for(i=0; i<itens.length; i++){
        itens[i].hidden=false;

        const valores = {
            data: itens[i].dataset.data,
            nome: itens[i].dataset.nome,
            email: itens[i].dataset.email
        };
    
        if(valores.nome!=nome && nome!="") itens[i].hidden = true;

    };
});
