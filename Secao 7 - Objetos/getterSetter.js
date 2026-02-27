const sequencia = {
    _valor: 1, // anderline (_) é uma convenção, dica pra desenvolvedores de fora
    get valor() {return this._valor++}, //chama valor e DEPOIS incrementa
    set valor(paramValor) {
        if(paramValor > this._valor){
            this._valor = paramValor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) //quando .valor = chama automaticamente o GET do objeto
sequencia.valor = 100 // quando o valor é colocado como RECEBE ( = ) então automaticamente chama o SET do objeto

//Então:
console.log(sequencia.valor) //get valor que é 100 agora, e também incrementa logo após, ou seja, agora valor == 101