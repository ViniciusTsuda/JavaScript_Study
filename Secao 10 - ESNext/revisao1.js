// 'let' e 'const'

{
    var a = 2
    let b = 3
}

console.log(a)
//console.log(b) <- não é possivel pois let só está no escopo do bloco de código


//Template String ' `` '

const produto = 'iPad'
console.log(`${produto} é caro!`)

//Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { nome, idade } = { nome: 'Ana', idade :9 }
console.log(nome, idade)