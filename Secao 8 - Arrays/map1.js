const nums = [1, 2, 3, 4, 5]

//Map é um for com propósito
let resultado = nums.map(e => {
    //Pega o elemento do array (fazendo uma iteração passando por cada um) e retorna o dobro
    return e * 2
})

//Array original
console.log(nums)

//Array novo 
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)