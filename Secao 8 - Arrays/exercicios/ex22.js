const contarCaractere = (frase, letra) => {
    let qntCaracteres = 0

    for(i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
        qntCaracteres++
        }
    }

    return qntCaracteres
}

console.log(contarCaractere('Essa linguagem é bem divertida, devia aprender mais', 's'))