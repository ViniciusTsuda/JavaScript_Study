function criarProduto (nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 10
    }
}

let prod1 = criarProduto('Caixa', 50)
console.log(`Nome: ${prod1.nome} - Preço: ${prod1.preco}`)
console.log(`Desconto de: ${prod1.desconto}%`)

console.log(`Novo preço: Nome: ${prod1.nome} - Preço: ${prod1.preco - (prod1.preco * (prod1.desconto/100))}`)