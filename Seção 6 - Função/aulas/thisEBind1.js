const pessoa = {
    saudacao: 'Bom dia',
    falar (){
        console.log(this.saudacao)
    }
}

pessoa.falar()

//nao acha
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e 00



const falarDePesoa = pessoa.falar.bind(pessoa) //referenciar o this correto por meio da função .bind
falarDePesoa()
