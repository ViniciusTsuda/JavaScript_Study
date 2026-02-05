const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

//função sendo colocado dentro de uma constate
const exibirAprovados = aprovado => {
    console.log(aprovado)
}

aprovados.forEach(exibirAprovados)