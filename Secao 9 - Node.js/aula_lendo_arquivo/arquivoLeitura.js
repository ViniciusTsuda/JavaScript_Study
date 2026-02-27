const { error } = require('console')
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//usando require apenas (os dados trazidos são em JSON)
const config = require('./arquivo.json')
console.log(config.db)

//lendo pasta
fs.readdir('./Secao 9 - Node.js', (err, arquivos) => {
    console.log('Conteúdo das pasta...')
    console.log(arquivos)
})