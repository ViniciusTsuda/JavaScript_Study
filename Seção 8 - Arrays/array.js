// Arrays em JavaScript é um objeto mas funciona da mesma forma que outras linguagens

console.log(typeof Array, typeof new Array, typeof []) 

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[3] = 'Paulo'

//forma mais apropriada de adicionar um novo elemento
aprovados.push('Adriana')

//tamanho do array
console.log(aprovados.length)

//se colocar no indice 9? os elementos anteriores são definidos como undefined
aprovados[9] = 'Rafael'
console.log('Tamanho do array: ' + aprovados.length)
console.log(aprovados)

//ordena em ordem alfabética
let aprovadorArray = [...aprovados].sort()
console.log(aprovadorArray)
console.log(aprovados)


delete aprovados[1]

aprovados = ['Bia', 'Carlos', 'Ana']

//método versátil: 
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')

console.log(aprovados)