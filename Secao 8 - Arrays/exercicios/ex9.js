const simboloMais = (num) => {
  return Array(num).fill('+').join('')
}

console.log(simboloMais(5))


//outro jeito
const simboloMais2 = (num) => {
  let str = ''
  for (let i = 0; i < num; i++) {
    str += '+'
  }
  return str
}

console.log(simboloMais2(6))
