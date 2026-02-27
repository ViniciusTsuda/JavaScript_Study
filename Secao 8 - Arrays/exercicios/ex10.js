const receberPrimeiroEUltimoElemento = (elementosArray) => {
  return [elementosArray[0], elementosArray[elementosArray.length - 1]]
}

console.log(receberPrimeiroEUltimoElemento([5, 'cachorro', 5, 19, -2, 2]))

//outro jeito

const receberPrimeiroEUltimoElemento2 = (arr) => [
  arr.at(0), //primeiro elemento
  arr.at(-1) //ultimo elemento
]

console.log(receberPrimeiroEUltimoElemento2([4,4,2,3,5,6,10]))