const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você assiste gameplay de algum youtuber ?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: [
                    "Bom",
                    "Muito Bom"
                    ]
            },
            {
                texto: "Não, eu sou um bosta",
                afirmacao: [
                    "Meu Deus",
                    "kkkkkk"
                    ]
            }           
            
        ]
    },
    {
        enunciado: "Você gosta de jogar jogos de terror ?",
        alternativas: [
            {
                texto:"Sim",
                afirmacao: [
                    "bacana",
                    "Tendi"
                    ]
            },
            {
                texto: "Não, tenho medo",
                afirmacao: [
                    "HMmmm",
                    "QUanta boiolice"
                    ]
            }
        ]
    },
    {
        enunciado: "Você prefere que tipo de plataforma ?",
        alternativas: [
            {
                texto:"Consoles",
                afirmacao: [
                    "Ih",
                    "Se gosta de sofrer né"
                    ]
            },
            {
                texto:"Computador",
                afirmacao: [
                    "Legal",
                    "Bacana"
                    ]
            }
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.lenght);
    return lista[posicao];
}
mostraPergunta();
