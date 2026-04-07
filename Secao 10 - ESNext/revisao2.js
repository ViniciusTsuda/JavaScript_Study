// Arrow Function
const soma = (a, b) => a + b // toda função arrow é uma função anônima que apenas é "inserida" dentro de uma variável
console.log(soma(2,4))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)

//parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

//operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))
