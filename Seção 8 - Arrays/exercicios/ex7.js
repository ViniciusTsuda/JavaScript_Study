const multiplicarSemOperadorVezes = (n1, n2) => {
    if(typeof n1 != 'number' && typeof n2 != 'number') {
        return console.log("Apenas números permitidos")
    }

    if(n1 < 0 && n2 < 0) {
        return console.log("Números negativos não são permitidos")
    }

    let resultado = n1
    for(let i = 1; i < n2; i++) {
        resultado += n1
    }
    console.log(`Valor total: ${resultado}`)
}

multiplicarSemOperadorVezes(0, 5)
multiplicarSemOperadorVezes(5, 5)
multiplicarSemOperadorVezes(6, 3)
multiplicarSemOperadorVezes(2, 1)