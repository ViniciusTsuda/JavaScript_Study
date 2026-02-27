const filtrarNumeros = (array) => {

    const arrayNum = array.filter((el) => {
        return typeof el === 'number'
    }) 

    console.log(arrayNum)
}

const novoArray = ['Hollywood', 5, 8, 1, 'Paulo']

filtrarNumeros(novoArray)
