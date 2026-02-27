function fruta(fruta) {
    switch(fruta){
        case 'Maçã':
            return console.log("Não vendemos esta fruta aqui")
        case 'Kiwi': 
            return console.log("Estamos com escassez de kiwis")
        case 'Melancia':
            return console.log("Aqui está, são 3 reais o quilo")
        default: console.log("ERRO")
    }
}

fruta("Carro")