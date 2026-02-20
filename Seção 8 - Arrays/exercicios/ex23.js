const buscarPalavrasSemelhantes = (str, arrayPalavras) => {
    const resultado = [];

    for (let i = 0; i < arrayPalavras.length; i++) {
        let palavraAtual = arrayPalavras[i];

        for (let j = 0; j <= palavraAtual.length - str.length; j++) {
            let encontrou = true;

            for (let k = 0; k < str.length; k++) {
                    if (palavraAtual[j + k] !== str[k]) {
                    encontrou = false;
                    break;
                }
            }

            if (encontrou) {
                resultado.push(palavraAtual);
                break;
            }
        }
    }

    return resultado;
};

console.log(buscarPalavrasSemelhantes('pro', ['profissional', 'programador', 'carro', 'bicicleta', 'aproximar', 'capro', 'palavra']))

/*
Índice:  0 1 2 3 4 5 6 
Texto:   a s s o r p o (tamanho 7) - 3 (pro) = 4
         ^ ^ ^          ✔️
           ^ ^ ^        ✔️
             ^ ^ ^      ✔️
               ^ ^ ^    ✔️
                 ^ ^ ^  ✔️
                   ^ ^ ^ (estoura) X
*/