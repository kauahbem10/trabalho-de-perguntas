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
                afirmacao: [ 
                    "No início ficou com medo",
                "NO inicio ficou alegre"
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "você parau para comversar",
                    "voce fugio"
                ]
            }
        ]
    },
    {
        enunciado: "você para o carro, e agora?",
        alternativas: [
            {
                texto: "você fica no veículo e espera ele ",
                afirmacao:[
                    "Conseguiu fazer de forma certa",
                    "fez tudo errado"
                ]
            },
            {
                texto: "você sai rápido do veículo, e o policial está suspeitando.",
                afirmacao:[ 
                    "conseguiu fazer ele ter suspeita de você ",
                    "fazer voce se matar "
                ]
            }
        ]
    },
    {
        enunciado: "você fez tudo certo ",
        alternativas: [
            {
                texto: "deu tudo certo .",
                afirmacao: [ 
                    "agora ele mandanda você ir para casa",
                    "so corre "
                ]
            },
            {
                texto: "deu errado e agora tem que deixar eles verificarem seu carro.",
                afirmacao: [
                "eles estão olhando muito pro seu carro",
                "eles estao de olho em voce"
                ]
            }
        ]
    },
    {
        enunciado: "e agora?.",
        alternativas: [
            {
                texto: "ja está em casa, de boa.",
                afirmacao: [ 
                    "vendo tv",
                    "vendo o sol nacer 4"
                ]
            },
            {
                texto: "eles encontraram uma arma.",
                afirmacao: [
                    "está cheio de sangue, e agora?",
                    "voce morreu "
                ]
            }
        ]
    },
    {
        enunciado: "você está correndo da policia, a pé",
        alternativas: [
            {
                texto: "você corre muito pois os policiais acharam a arma do crime",
                afirmacao: [ 
                    "E você é pego ",
                    "voce ta morto e foi parar no inferno "
                ]
            },
            {
                texto: "você tenta matar os policiais.",
                afirmacao: [ 
                    "e acaba sendo baleado e morto no local",
                    "tudo acaba em um lugar sem voce"
                ]
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
function aleatorio(lista){
    conts posicao = Math.random()*lista.length
    console.log(posicao)
}

mostrarPergunta()