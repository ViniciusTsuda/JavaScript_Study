//Ineficiente criação de objetos
const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 20
}

//O que é Factory? 
//R: Uma função que sempre retorna um novo objeto

//Factory simples 
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())