
function tabuada(num) {
    for(i = 0; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

tabuada(5)

let resultado = 0
for(i = 0; i <= 100; i++) {
    resultado += i  
}
console.log(resultado)

function ehPar(num) {
    return num % 2 == 0 ? "Par" : "Ímpar"
}

console.log(ehPar(6))


function maior(n1, n2) {
    return n1 > n2 ? n1 : n2
}

console.log(maior(-100,50))

//Mostrar elementos
const vetor = [12, 500, 14, 15, 32, 13, 3]

for(i = 0; i < vetor.length; i++) {
    console.log(vetor[i])
}

//Maior valor do array
let maiorValor = 0
for(i = 0; i < vetor.length; i++) {
    if (maiorValor < vetor[i]) {
        maiorValor = vetor[i]
    }
}
console.log(maiorValor)

//Somar array
let valoresSomados = 0
vetor.forEach(element => {
    valoresSomados += element
})
console.log(valoresSomados)

//Contar pares
let vet = []
for (const valor of vetor) {
    if(valor % 2 === 0) {
        vet.push(valor)
    }
}

console.log(vet)

const obj = {
    nome: 'Ana',
    idade: 12,
    profissao: 'Engenheira',

    falar() {
        console.log(`Olá, meu nome é ${this.nome}`)
    }

}

console.log(`Olá, ${obj.nome}, você tem ${obj.idade} e é ${obj.profissao}`)

obj.falar()

//👉 Array de objetos Crie um array com várias pessoas:
const pessoas = [
  { nome: 'Ana', idade: 12 },
  { nome: 'João', idade: 20 },
  { nome: 'Maria', idade: 30 }
]

console.log(pessoas)

pessoas.forEach( element => {
    console.log(element.nome) 
})

const numeros = [1, 2, 3, 4]

const dobrados = numeros.map(n => { return n * 2 })

console.log(dobrados)
// [2, 4, 6, 8]

