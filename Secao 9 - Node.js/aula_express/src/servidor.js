const port = 3003
const bd = require('./bd.js')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

//lista produtos
app.get('/produtos', (req, res) => {
    res.send(bd.getProdutos())
})

//lista um produto com id na url
app.get('/produtos/:id', (req, res) => {
    res.send(bd.getProdutos(req.params.id))
})

//criar produto
app.post('/produtos', (req, res) => {
    const produto = bd.salvarProduto ({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
}) 

//update de um produto
app.put('/produtos/:id', (req, res) => {
    const produto = bd.salvarProduto ({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
}) 

//deletar produto
app.delete('/produtos/:id', (req, res) => {
    const produto = bd.excluirProduto(req.params.id)
    res.send(produto) //JSON
}) 


app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})