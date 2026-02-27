const calculaMedia = (arrayDeNumeros) => {
    let soma = 0
    arrayDeNumeros.forEach(numero => {
        soma += numero
    });

    return soma / arrayDeNumeros.length
}

const media = calculaMedia([1,2,3,4,5])
console.log(media)
const media2 = calculaMedia([0, 10])
console.log(media2)

//usando reduce
const calculaMedia2 = (arrayDeNumeros2) => {
    const soma = arrayDeNumeros2.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    return soma / arrayDeNumeros2.length
}

const media3 = calculaMedia2([1,2,3,4,5])
const media4 = calculaMedia2([0, 10])
console.log(media3)
console.log(media4)