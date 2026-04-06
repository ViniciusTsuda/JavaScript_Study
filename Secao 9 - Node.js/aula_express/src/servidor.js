const bd = require('./bd.js')
const port = 3003

const express = require('express')
const app = express()


app.get('/produtos', (req, res) => {
    res.send(bd.getProdutos())
})

app.get('/produtos/:id', (req, res) => {
    res.send(bd.getProdutos(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = bd.salvarProduto ({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
}) 

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})