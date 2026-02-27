const funcaoDaSorte = (num) => {
    const numSorteado = Math.floor(Math.random() * 11)
    if (num === numSorteado) {
        return console.log(`Parabéns! O número sorteado foi: ${numSorteado}`)
    } else {
        return console.log(`Que pena! O número sorteado foi: ${numSorteado}`)
    }
}

funcaoDaSorte(5)

//extra feita por mim

const gerarNumeroAleatorio = (min, max) => {
    const sorteado = Math.floor(Math.random() * (max - min + 1)) + min
    console.log('Número sorteado: ', sorteado)
}
gerarNumeroAleatorio(1, 100)