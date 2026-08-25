const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativa")
const caixaresultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")




const perguntas = [
    {
        enunciado: "você está dirigindo e a policia te para! ",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo . "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "você parau para comversar."
            }
        ]
    },
    {
        enunciado: "você para o carro, e agora?",
        alternativas: [
            {
                texto: "você fica no veículo e espera ele ",
                afirmacao: "Conseguiu fazer de forma certa."
            },
            {
                texto: "você sai rápido do veículo, e o policial está suspeitando.",
                afirmacao: "conseguiu fazer ele ter suspeita de você ."
            }
        ]
    },
    {
        enunciado: "você fez tudo certo ",
        alternativas: [
            {
                texto: "deu tudo certo .",
                afirmacao: "agora ele mandanda você ir para casa."
            },
            {
                texto: "deu errado e agora tem que deixar eles verificarem seu carro.",
                afirmacao: "eles estão olhando muito pro seu carro."
            }
        ]
    },
    {
        enunciado: "e agora?.",
        alternativas: [
            {
                texto: "ja está em casa, de boa.",
                afirmacao: "vendo tv."
            },
            {
                texto: "eles encontraram uma arma.",
                afirmacao: "está cheio de sangue, e agora?"
            }
        ]
    },
    {
        enunciado: "você está correndo da policia, a pé",
        alternativas: [
            {
                texto: "você corre muito pois os policiais acharam a arma do crime",
                afirmacao: "e você é pego ."
            },
            {
                texto: "você tenta matar os policiais.",
                afirmacao: "e acaba sendo baleado e morto no local. "
            }
        ]
    },
];

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
        const botaoAlternativas = document.creatElement("button")
        botaoAlternativas.textContent =alternativa.texto 
        botaoAlternativas.addEventListener("click",()=> respostaelecionada(alternativa))
        caixaAlternativas.appedChild(botaoAlternativas)
    }
}
function respostaelecionada(opcaoSelecionada){
    const afirmacoes = opcapSelecionada.afirmacao
    historiaFinal+= afismacoes +""
    atual++
    mostrarPergunta()
}
function mostrarResultado(){
    caixaPerguntas.textContent ="Em uma rua deserta..."
    textoResultado.textContent =historiaFinal
    caixaAlternativas.textContent ="";
}

mostrarPergunta()