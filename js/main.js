import{aleatorio} from "./aleatorio.js"
import{perguntas} from "./perguntas.js"

const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativa")
const caixaresultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")
const botaoIniciar=document.querySelector(".iniciar-btn")
const telaInicial=document.querySelector(".tela-inicial")




let atual = 0;
let perguntaAtual; 
let historiaFinal = ""

botaoIniciar.addEventListener("click",iniciajogo)

function iniciajogo(){
    atual= 0;
    historiaFinal=""
    telaInicial.style.display="none"
    caixaPerguntas.classList.remove("mostrar")
    caixaAlternativas.classList.remove("mostrar")
    caixaResultado.classList.remove("mostrar")
    mostrarPergunta()

}

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


