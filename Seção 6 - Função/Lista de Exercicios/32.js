function calcularAritmetica(vetor) {
    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
        console.log(`${soma} + ${vetor[i]} = ${soma + vetor[i]}`)
        soma += vetor[i]
    }
    const media = soma / vetor.length
    console.log(`${soma} / ${vetor.length} (Quantidade de Valores)`)
    return media
}

let vetor = [1, 2, 3, 4, 5]

const media = calcularAritmetica(vetor)
console.log(`Média aritmética: ${media}`)
