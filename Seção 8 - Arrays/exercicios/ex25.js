const inverter = (obj) => {
    const novoObj = {}

    for (let key in obj) {
        const valor = obj[key] //passa valor da key atual
        novoObj[valor] = key
    }

    return novoObj
}

console.log(inverter({a: 1, b: 2, c: 3}))