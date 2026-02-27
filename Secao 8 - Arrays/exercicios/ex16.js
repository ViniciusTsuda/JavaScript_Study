const despesasTotais = (arrayDeObj) => {
    let resultado = 0
    arrayDeObj.forEach(element => {
        resultado += element.preco 
    });
    console.log(resultado)
}

despesasTotais([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.99 }
])

//jeito mais moderno
const despesasTotais2 = (arrayDeObj2) => {
    return arrayDeObj2.reduce((acumulador, valorAtual) => acumulador += valorAtual.preco, 0) //método pra acumulação de valores dentro de um array
}

const totalDespesas = despesasTotais2([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3020.00 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 20000.99 }
])

console.log(totalDespesas)