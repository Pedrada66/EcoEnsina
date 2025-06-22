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

    const btnCadastrar = document.getElementById('cadastrar');

    btnCadastrar.addEventListener('click', ()=>{
        const data = new Date();
        const dia = data.getDate();
        const mes = data.getMonth();
        const ano = data.getFullYear();
        let datas = `${dia}/${mes}/${ano}`;

        let local = localStorage.getItem('cadastros');
        let dados = local+`${datas}, ${nome}, ${email}`;
        dados = JSON.stringify(dados);
        local = localStorage.setItem('cadastros', dados);
        console.log(local);
    });
}