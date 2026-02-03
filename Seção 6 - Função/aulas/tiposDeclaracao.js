console.log(soma(3, 4))
// console.log(sub(3, 2)) (não funciona)

//function declaration (função já carregada antes de percorrer o código)
function soma(x, y) {
    return x + y
}

//function expression (ela carrega apenas quando o código chegar nela)
const sub = function(x, y) {
    return x - y
}

//named function expression (POUCO USADA)
const mult = function mult (x, y) {
    return x * y
}

