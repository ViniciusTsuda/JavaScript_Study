import moduloA from '../aula_modulos/moduloA.js'
import http from 'http'

console.log(moduloA.bemVindo)
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) 

