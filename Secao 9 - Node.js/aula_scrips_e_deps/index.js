import axios from 'axios'
import express from 'express'

const app = express()
const PORT = 3000
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const buscarNome = (nome, data) => {
    return data.filter(funcionario => 
        nome === funcionario.nome
    )
}

app.get('/', async (req, res) => {
    const response = await axios.get(url)
    res.json(response.data)
})

app.get('/funcionarios/:nome', async(req, res) => {
    const { nome } = req.params
    const { data } = await axios.get(url)
    const resultado = buscarNome(nome, data)
    res.json(resultado)
}) 


app.listen(PORT, () => {
    console.log("Servidor Rodando na porta:", PORT)
})