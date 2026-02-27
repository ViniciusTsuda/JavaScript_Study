//retornar um array com o alfabeto desde o indice 0 até o número indicado utilizando um outro array alfabeto: 
const alfabetoMaiusculo = [
  'A','B','C','D','E','F','G','H','I','J',
  'K','L','M','N','O','P','Q','R','S','T',
  'U','V','W','X','Y','Z'
]

//solução com filter
const novoAlfabeto = (num) => {
    const novoAlfabeto = alfabetoMaiusculo.filter((_, index) => {
        return index < num
    })
    return novoAlfabeto
}

console.log(novoAlfabeto(5))
//[ 'A', 'B', 'C', 'D', 'E' ]

//solução com slice
const novoAlfabeto2 = (num) => {
    const novoAlfabeto2 = alfabetoMaiusculo.slice(0, num)
    return novoAlfabeto2
}
console.log(novoAlfabeto2(5))


