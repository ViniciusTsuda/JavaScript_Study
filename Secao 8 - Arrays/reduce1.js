//O método do reduce para array chama uma callback com um acumulador (o valor retornado das iterações anteriores) e o valor atual

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }   
]

const resultado = alunos
    .map(a => a.nota)
    .reduce(function(acumulador, atual) {
        console.log(`${acumulador}(Acumulador) + ${atual}(Valor atual da iteração) = ${acumulador + atual}`) //imprimir o retorno do acumulador (que é o responsável por chamar o retorno das iterações anteriores) e o valor atual da iteração
        return acumulador + atual //o valor do acumulador e atual é passado como o próximo acumulador
    })

console.log()


//Testando outras coisas:
//Pegando a média dos alunos usando como divisor o número de iterações feitas
let qntAcc = 0
//Usando Reduce diretamente e puxando também o nome 
const resultado2 = alunos.reduce((acc, alunoAtual) => {
    //como não quero que apareceça a somatória da primeira acumulação por ser 0 então faço um IF
    if(acc != 0){ 
        console.log(`${acc} + ${alunoAtual.nota} = ${acc + alunoAtual.nota}`)
    }
    qntAcc++
    return acc + alunoAtual.nota
}, 0) //0 significa que o valor inicial será 0

console.log('Quantidade de acumulações feitas: ' + qntAcc)
console.log('Média das notas: ' + resultado2 / qntAcc) //média das notas





    
