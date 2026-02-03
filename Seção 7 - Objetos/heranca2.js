//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //não faça isso em casa!!
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr1) //ele vai procurar o atributo no objeto filho, se não tiver ele vai procurar no pai (pois estão numa herança graças a __proto__: X e assim por diante) e depois no pai que tem o atributo

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, //shadowing em cima do velMax do objeto carro (substitui de certa forma)
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //define ferrari como filho de carro (ferrari protótipo de carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100) //chamou funcao do pai mesmo não tendo no filho volvo
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
