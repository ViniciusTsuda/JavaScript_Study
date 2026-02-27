const repetir = (x, numRepeticoes) => {
    const resultado = []
    for(let i = 0; i < numRepeticoes; i++) {
        resultado.push(x)
    }
    console.log(resultado)
}

repetir(9, 10)


//com método pra isso

const repetir2 = (x, numRepeticoes) => {
    const resultado = Array(numRepeticoes).fill(x) //cria um array com primeiro: quantidade de elementos; segundo: preenche (fil) com o valor passado
    return resultado
}

console.log(repetir2(76, 5))
