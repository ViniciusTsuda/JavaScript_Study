let vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

function percorrerVetor(vetor) {
    let qntdNumerosIntervalo = 0
    let numerosIntervalo = []
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20) {
            numerosIntervalo.push(vetor[i])
            qntdNumerosIntervalo ++
        }
    }

    console.log(`Números dentro do intervalo = ${numerosIntervalo}. Quantidade total = ${qntdNumerosIntervalo}`)
}

percorrerVetor(vetor)