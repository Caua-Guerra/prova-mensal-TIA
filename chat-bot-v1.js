import { todosBancos, mostProbablyQuestion, palavrasCursosTecnicos, palavrasEscolaFundador, palavrasMatricula, palavrasNadaHaver } from "./can-i-answer.js";

console.log("-chat bot: Olá, bem vindo ao chat bot do colégio bento quirino, com o que eu poderia te ajudar hoje?")
console.log(" ")

let pergunta = "Qual o nome do fundador da instituição?";
console.log("-user: " + pergunta)
console.log(" ")

let palavrasPergunta
if(pergunta[pergunta.length -1] === "?"){
    pergunta = pergunta.slice(0,-1)
    palavrasPergunta = pergunta.toLowerCase().split(" ")
}
palavrasPergunta = pergunta.toLowerCase().split(" ")

function compararPergunta(banco){
    const tamanhoBanco = banco.probablyWords.length
    for(let i = 0; i < tamanhoBanco; ++i){
        palavrasPergunta.forEach((palavra) =>{
            if(banco.probablyWords[i] === palavra){
                banco.matched++
            }
        })
    }
}

function compararTodos(){
    todosBancos.forEach((banco) =>{
        compararPergunta(banco)
    })
}

compararTodos()
mostProbablyQuestion()
