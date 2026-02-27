function maiorEMenor(vetor) {
    let menor = vetor[0]
    let maior = vetor[0]

    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < menor) {
            menor = vetor[i]
        }

        if(vetor[i] > maior) {
            maior = vetor[i]
        }
    }

    return { menor, maior } //retorna objeto
    //return [ menor, maior ] //retorna vetor
}

let vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

const { maior, menor } = maiorEMenor(vetor) 
console.log(maiorEMenor(vetor))

console.log(`Menor número do vetor: ${menor}`)

console.log(`Maior número do vetor: ${maiorEMenor(vetor).maior}`)
//console.log(`Menor número do vetor: ${maiorEMenor(vetor).[0]`) //para retornar como se fosse um vetor