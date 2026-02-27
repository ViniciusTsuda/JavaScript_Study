import axios from 'axios'

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const menorSalarioPorPais = (funcionarios, country) => {
    const funcionariosDoPais = funcionarios.filter(f => f.pais === country)

    if (funcionariosDoPais.length === 0) return null

    return funcionariosDoPais.reduce((menor, atual) =>
        atual.salario < menor.salario ? atual : menor //retorna menor salário
    )
}

const executar = async () => {
    const funcionariosData = await axios.get(url) //retorna todas propriedades incluindo data, por isso pra referenciar os dados em si é necessário usar .data depois da variável
    console.log(funcionariosData.data) 
    const resultado = menorSalarioPorPais(funcionariosData.data, 'Russia')
    console.log(resultado)
}

executar()