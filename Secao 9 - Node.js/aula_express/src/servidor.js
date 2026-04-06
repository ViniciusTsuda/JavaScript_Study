const port = 3003
const express = require('express')
const app = express()

app.get('/produtos', (req, res) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req, res) => {
    res.send({nome: 'Notebook', preco: 123.45}) // vai converter para json
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})