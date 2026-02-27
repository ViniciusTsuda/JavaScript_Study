const objOriginal = { a: 4, b: 5 }

const removerPropriedade = (obj, rmPropriedade) => {
    const objResultado = {...obj} //cria uma cópia do objeto (não usa referência de memória)
    delete objResultado[rmPropriedade]
    return objResultado
}

const novoObjeto = removerPropriedade(objOriginal, "a") // {b:5}
console.log(novoObjeto)

console.log(Object.is(objOriginal, novoObjeto))

