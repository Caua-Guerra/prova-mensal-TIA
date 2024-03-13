// Palavras fundados
export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "qual", "fundou", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "criador", "instituição", "educacional"
    ],
    matched: 0,
    answer: "-chat bot: Quem fundou a escola foi XYZXAS"
}

// Cursos técnicos
export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,
    answer: "-chat bot: Oferecemos os cursos técnicos XYZXAADJASD"
}

// Matricular e rematricular
export const palavrasMatricula = {
    probablyWords: [
        "quem", "quer", "saber", "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "matrícula", "rematrícula",
        "seu", "filho", "sua", "filha", "quais", "são",
        "documentos", "necessários", "para", "matrícula",
        "rematrícula", "na", "escola"
    ],
    matched: 0,
    answer: "-chat bot: Para matricular Deve ser feito XYZ, e para matricular ABC"
}

// QUALQUER OUTRA PERGUNTA
// Ex: falar que não sabe e para ligar para a instituição
export const palavrasNadaHaver = {
    probablyWords: [
        "onde", "quem", "quer", "qual", "quanto","futebol", "volei", "samba","basquete", "camiseta","feridos", "explorar", "motocicleta", "fino", "apartamento", "suicídio", "frente", "restaurante", "sogra", "restaurante", "cinzeiro", "refém", "agricultor", "monumento", "zero", "turbante", "pesquise", "zoologico", "shopping", "a", "o", "as", "os", "de"
    ],
    matched: 0,
    answer: "-chat bot: Desculpe, não possuo a resposta para essa pergunta."
}

export const todosBancos = [palavrasCursosTecnicos, palavrasEscolaFundador, palavrasMatricula, palavrasNadaHaver]

function showAnswer(index) {
    // Retorne uma string como resposta
    // Exemplo: "Minha resposta"
    switch (index) {
        case 0:
            return console.log(palavrasEscolaFundador.answer)
        case 1:
            return console.log(palavrasCursosTecnicos.answer)
        case 2:
            return console.log(palavrasMatricula.answer)
        case 3:
            return console.log(palavrasNadaHaver.answer)
        default:
            return console.log(palavrasNadaHaver.answer)
    }
}

export function mostProbablyQuestion() {
    // Veja quem teve mais matches dos bancos
    let matches = [
        palavrasEscolaFundador.matched, 
        palavrasCursosTecnicos.matched,
        palavrasMatricula.matched,
        palavrasNadaHaver.matched
    ]
    // Chame a showAnswer com o parâmetro
    return showAnswer(matches.indexOf(Math.max(...matches)))
}