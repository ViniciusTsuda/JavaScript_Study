const removerVogais = (palavra) => {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    let novoArray = []

    for (let i = 0; i < palavra.length; i++) {
        if (!vogais.includes(palavra[i])) {
            novoArray.push(palavra[i])
        }
    }

    return novoArray
}

console.log(removerVogais('casa'))


//moderna: 
const removerVogais2 = (palavra) => palavra
    .split('')
    .filter(letra => !'aeiou'.includes(letra))
    .join('')

console.log(removerVogais2('cachorro'))