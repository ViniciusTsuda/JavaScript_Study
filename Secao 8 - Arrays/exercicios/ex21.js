const contarPalavras = (texto) => {
  if (!texto || typeof texto !== 'string') return 0;

  return texto
    .trim()              // remove espaços no início e no fim
    .split(/\s+/)        // divide por um ou mais espaços
    .length;
}

console.log(contarPalavras('Olá, pessoal como vocês estão?'))
