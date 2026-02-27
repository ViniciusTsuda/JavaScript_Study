const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const ob2 = { a, b, c }
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} //cria um atriburo valorAttr com o valor de nomeAttr(uma variavel definida anteriormente)

const obj5 = {
    //jeito antigo: (melhor e tradicional)
    funcao1: function() {
        //...
    }, 

    //jeito novo:
    funcao() {
        //...
    }
}