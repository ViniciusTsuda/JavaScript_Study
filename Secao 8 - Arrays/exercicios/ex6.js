const inverso = (valor) => {
    
    if (typeof valor === 'boolean') {
        return !valor
    }

    if (typeof valor === 'number') {
        return -valor
    }

    return `booleano ou número esperado, mas o parâmetro é do tipo ${typeof valor}`
}

const resultado = inverso(-4)
console.log(resultado)
