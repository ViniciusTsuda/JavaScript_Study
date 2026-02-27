const receberSomenteOsParesDeIndicesPares = (array) => {
    const novoArray = array.filter((num, index) => num % 2 == 0 && index % 2 == 0)
    console.log(novoArray)
}

receberSomenteOsParesDeIndicesPares([10, 70, 22, 43, 23, 56, 58])