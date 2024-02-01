//document = comando para alterar o html
//para selecionar um pedaço que quer copiar é preciso colocar o seguinte comando: document.querySelector
let listaDeNumerosSorteados=[];
let numeroLimite = 10;
let numeroSecreto=gerarNumeroAleatorio();
let tentativas = 1;

//criar um função para o texto
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
} 
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

//vamos criar uma função para o botão 'Chutar' no HTML
//function= função
function verificarChute(){
    let chute= document.querySelector('input').value;
    if(chute==numeroSecreto){
        exibirTextoNaTela('h1', 'acertou');
        let palavratentativa=tentativas>1?'tentivas': 'tentativa';
        let mensagemTentativas=`Voce descobriu o numero secreto com ${tentativas} ${palavratentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }        else{
            if (chute>numeroSecreto){exibirTextoNaTela('p','O numero é menor');}
            else{
                exibirTextoNaTela('p','O numero é maior');
            }
            tentativas++;
            limparCampo();
        }   
}
//return da o retorno do valor aleatorio
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() *numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista==numeroLimite); {
        listaDeNumerosSorteados=[];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();}
        else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            return numeroEscolhido;
        }

}
//input = entrada do usuário
function limparCampo(){
    chute=document.querySelector('input');
    chute.value='';
}
function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    documento.getElementById('reiniciar').setAttribute('disabled', true);
}

