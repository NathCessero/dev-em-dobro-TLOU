// somente uma linha de comentário;
/* várias linhas de comentário; */

/* 
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    * passo 1 - dar um jeito de pegar o elemento HTML dos botões
    * passo 2 - dar um jeito de identificar o clique do usuário no botão
    * passo 3 - desmarcar o botão selecionado anterior
    * passo 4 - marcar o botão clicado como se estivesse selecionada
    * passo 5 - esconder a imagem anterior
    * passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//console.log(document); //digitar "log", selecionar a do console
const botoesCarrossel = document.querySelectorAll('.botao'); //passo 1
const imagens = document.querySelectorAll('.imagem');

//passo 2
botoesCarrossel.forEach((botao, indice) => { 
    botao.addEventListener('click', () => {
        //console.log('clicou no botão');

        //passo 3
        desativarBotaoSelecionado();

        //passo 4
        mostrarBotaoSelecionado(botao);

        //passo 5
        removerImagemSelecionada();

        //passo 6
        adicionarImagemSelecionada(indice);

    })
})


function adicionarImagemSelecionada(indice) {
    imagens[indice].classList.add('ativa');
}

function mostrarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function removerImagemSelecionada() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

