const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro' //mesmo pessoa sendo constante é possível mudar seu atributo
console.log(pessoa)

//pessoa = { nome: 'Ana' } ==> erro de tentar colocar pessoa em outro endereço que leva a um objeto diferente (pois pessoa é uma constante e ja foi definida o endereço dela anteriormente)

Object.freeze(pessoa)

pessoa.nome = 'Maria' //Não funcionará graças ao "freeze"
pessoa.end = 'Rua ABC' //também
delete pessoa.nome //também

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoa.nome = 'Maria'
console.log(pessoaConstante)