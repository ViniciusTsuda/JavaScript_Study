function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0 
    
    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocideAtual = function () {
        return velocidadeAtual
    }
}

const ferrari = new Carro 
ferrari.acelerar(ferrari.getVelocideAtual(350, 20))
ferrari.acelerar()
console.log(ferrari.getVelocideAtual())