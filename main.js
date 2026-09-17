import{aleatorio} from "./aleatorio.js"
import{perguntas} from "./Perguntas.js"

const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativa")
const caixaresultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")






let atual = 0;
let perguntaAtual; 
let historiaFinal = ""

function mostrarPergunta () {
    if(atual >= perguntas.length){
        mostrarResultado()
        return
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent = " ";
    mostraAlternativas() 
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button")
        botaoAlternativas.textContent =alternativa.texto 
        botaoAlternativas.addEventListener("click",()=> respostaelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}
function respostaelecionada(opcaoSelecionada){
    const afirmacoes= aleatorio(opcaoSelecionada.afirmacao)
    historiaFinal+= afirmacoes +""
    atual++
    mostrarPergunta()
}
function mostrarResultado(){
    caixaPerguntas.textContent ="Em uma rua deserta..."
    textoResultado.textContent =historiaFinal
    caixaAlternativas.textContent ="";
}


mostrarPergunta()