const filtrarPorQuantidadeDeDigitos = (arr, numDigitos) => {
    return arr.filter(num => String(Math.abs(num)).length === numDigitos)
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11, -12], 2))
// [38, 10, 11]

console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))
// [5, 9, 1]