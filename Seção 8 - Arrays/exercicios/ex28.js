const receberMelhorEstudante = (obj) => {
    let melhorMedia = 0
    let nomeMelhorAluno = ''

    for (let alunoAtual in obj) {
        let soma = 0

        obj[alunoAtual].forEach(nota => {
            soma += nota
        })

        const mediaAlunoAtual = soma / obj[alunoAtual].length

        if (mediaAlunoAtual > melhorMedia) {
            melhorMedia = mediaAlunoAtual
            nomeMelhorAluno = alunoAtual
        }
    }

    return {
        nome: nomeMelhorAluno,
        media: melhorMedia
    }
}

console.log(
  receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
  })
)
// { nome: 'Mariana', media: 7.875 }