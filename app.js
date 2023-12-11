let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1
exibirMensagemInicial();
function limparCampo(){
    chute = document.querySelector ('input')
    chute.value = '';
}

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio (){
    return parseInt(Math.random() * 10 + 1)
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial();
}
function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto e menor');
          
        } else {
            exibirTextoNaTela('p', 'O numero secreto e maior');
           
        }
        tentativas +=1
        limparCampo()

    }
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1','jogo do numero secreto')
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')
}
