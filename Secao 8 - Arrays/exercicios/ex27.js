//sem sort

function segundoMaior(array) {
  let maior = -Infinity
  let segundo = -Infinity

  for (let num of array) {
    if (num > maior) {
      segundo = maior
      maior = num
    } else if (num < maior && num > segundo) {
      segundo = num
    }
  }

  return segundo
}

console.log(segundoMaior([12, 16, 1, 5])) // 12
console.log(segundoMaior([8, 4, 5, 6]))   // 6

//com sort
function segundoMaior(array) {
  const numerosUnicos = [...new Set(array)] // remove duplicados
  numerosUnicos.sort((a, b) => b - a)       // ordena do maior para o menor
  return numerosUnicos[1]
}

// Exemplos
console.log(segundoMaior([12, 16, 1, 5])) // 12
console.log(segundoMaior([8, 4, 5, 6]))   // 6