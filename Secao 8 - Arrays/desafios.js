const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }   
]

const alunosTudoTrue = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: true }   
]

const alunosTudoFalso = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false }   
]


//Desafio 1: 
//Todos os alunos são bolsistas?
//Retornar todos alunos, notas e bolsas
//Retornar não bolsistas sem a nota
const todosAlunos = alunos.map((element) => {
    return {
        nome: element.nome,
        bolsista: element.bolsista
    }
})

const notBolsista = alunos.filter((element) => !element.bolsista == true).map((element) => {
    return {
        nome: element.nome,
        bolsista: element.bolsista
    }
})

const allBolsistas = () => {
    const resultado = alunos.every((element) => element.bolsista == true)    
    if (resultado == true) {
        return "Todos alunos são bolsistas"
    }
    else {
        return "Há Bolsistas e Não Bolsistas"
    }
}

console.log(allBolsistas())
console.log("Todos Alunos: ", todosAlunos)
console.log("Todos não bolsistas: ", notBolsista)


console.log('=================================')
//Desafio 2: 
//Algum aluno é bolsista? Qual deles?

const haveBolsista = (array) => {
    const someBolsista = array.some((element) => {
        return element.bolsista == true
    })
    return someBolsista
}


console.log('Algum aluno é bolsista?', haveBolsista(alunos))

const whoAreBolsista = (array) => {
    const bolsista = array.filter((element) => {
        return element.bolsista == true
    })
    return bolsista
}
console.log('Alunos que são bolsistas: ', whoAreBolsista(alunos))


