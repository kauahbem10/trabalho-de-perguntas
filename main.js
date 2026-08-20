const caixaPrincipal = document.querySelector(.caix-caixa-principal)
const caixaPerguntas = document.querySelector(.caix-caixa-perguntas)
const caixaAlternativas = document.querySelector(.caix-caixa-alternativas)
const caixaresultado = document.querySelector(.caix-caixa-resultado)
const textoResultado = document.querySelector(.texto-resultado)




const perguntas = [
    {
        enunciado: "voce esta dirigindo e a policia para  voce  ",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo . "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "voce parau para comversar."
            }
        ]
    },
    {
        enunciado: "voce para o cara e agora?",
        alternativas: [
            {
                texto: "voce fica na veiculo e espera ele ",
                afirmacao: "Conseguiu fazer de forma certa."
            },
            {
                texto: "voce sai rapido do veiculo e o policial ta suspeitando.",
                afirmacao: "conseguiu fazer ele ter suspeita de voce ."
            }
        ]
    },
    {
        enunciado: "voce fez tudo certa ",
        alternativas: [
            {
                texto: "deu tudo certo .",
                afirmacao: "agora ele mandanda voce ir para casa."
            },
            {
                texto: "deu errado e agora tem que deixar eles verificarem seu carro.",
                afirmacao: "eles entao olhando muito o seu carro."
            }
        ]
    },
    {
        enunciado: "e agora?.",
        alternativas: [
            {
                texto: "ja ta em casa de boa.",
                afirmacao: "ta vendo tv."
            },
            {
                texto: "eles encontrarao uma arma.",
                afirmacao: "ta cheio de sangue e agora"
            }
        ]
    },
    {
        enunciado: "voce ta correndo ape da policia",
        alternativas: [
            {
                texto: "voce carre muito pos achar sua arma do crime",
                afirmacao: "e voce e pego ."
            },
            {
                texto: "voce tenta matar os policiais.",
                afirmacao: "e acaba sendo baleado e morto do local. "
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
    pergiuntaAtual = perguntas[atual]
    caixaPerguntas.textContent =pergiuntaAtual 
}

mostrarPergunta()