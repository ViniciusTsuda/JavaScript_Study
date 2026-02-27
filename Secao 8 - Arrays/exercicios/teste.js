const buscarPalavrasSemelhantes = (palavra, arrayPalavras) => {
  const resultado = [];

  for (let i = 0; i < arrayPalavras.length; i++) {
    if (arrayPalavras[i].includes(palavra)) {
      resultado.push(arrayPalavras[i]);
    }
  }

  return resultado;
};

console.log(buscarPalavrasSemelhantes('pro', ['profissional', 'programador', 'carro', 'bicicleta', 'aproximar', 'capro']))