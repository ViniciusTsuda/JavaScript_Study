//versão bem enxura
const objetoParaArray = (obj) => Object.entries(obj)

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de Software"
})) 



//versão foreach
const objetoParaArray2 = (obj) => {
  const arrayDeChaveEValor = []

  Object.entries(obj).forEach(([key, value]) => {
    arrayDeChaveEValor.push([key, value])
  })

  return console.log(arrayDeChaveEValor) 
}

objetoParaArray2({
  nome: "Maria",
  profissao: "Desenvolvedora de Software"
})



//versao for in
function objetoParaArray3(obj) {
  const resultado = []

  for (let chave in obj) {
    resultado.push([chave, obj[chave]])
  }

  return console.log(resultado)
}

objetoParaArray3({
  nome: "Maria",
  profissao: "Desenvolvedora de Software"
})

