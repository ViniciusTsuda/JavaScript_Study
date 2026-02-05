//sendo uma constante, o array pode ser modificado internamente como seus elementos, mas pilotos sempre apontará pra esse array
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

//Remove último elemento do array
pilotos.pop()
console.log(pilotos)

//Adiciona elemento na última posição
pilotos.push('Verstappen')
console.log(pilotos)

//Remove primeiro elemento da lista
pilotos.shift()
console.log(pilotos)

//Adiciona elemento na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

//Splice pode adicionar e remover elementos
//(1º parâmetro para ir até aquele elemento, 2º parâmetro para remover (caso não bote 0) e os próximos parâmetros caso queira adicionar elementos)

//adicionar: 
pilotos.splice(2, 0, 'Bottas', 'Quebec')
console.log(pilotos)

//remover:
pilotos.splice(3, 1) //Terceiro elemento será removido (Quebec)
console.log(pilotos)

//Retorna um novo array
const algunsPilotos1 = pilotos.slice(2) //a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(2, 4) //a partir do indíce 2 até o índice 3 (índice 4 não entra)
console.log(algunsPilotos2)

console.log("Olá mundo")

