const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad pro', preco: 4199, fragil: true},    
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

//retornar produtos que são frágeis primeiro depois retorna produtos que são mais caros que 500

const caro = produtos
    .filter((value) => {
    return value.fragil == true 
})
    .filter((value) => {
        return value.preco > 500
    })

console.log(caro)
