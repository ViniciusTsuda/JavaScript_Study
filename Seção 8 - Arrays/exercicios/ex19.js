//usando Math.min
const menorNumero = (arrayNum) => Math.min(...arrayNum)
console.log(menorNumero([4, 1, 23, 7, 9, 34]))

//irei usar dois loops diferentes

//for:
const menorNumero2 = (arrayNum2) => {
    let menorNum = arrayNum2[0]
    for (let i = 1; i < arrayNum2.length; i++) { //começando do indice 1, pois o menorNum ja recebe o numero do indice 0 anteriormente, portanto é redundante fazer iteração do 0
        if (arrayNum2[i] < menorNum) {
            menorNum = arrayNum2[i]
        }
    }
    return menorNum
}
console.log(menorNumero2([4, 1, 23, 7, 9, 34]))

//foreach
const menorNumero3 = (arrayNum3) => {
    let menorNum = arrayNum3[0]
    arrayNum3.forEach(element => {
        if (element < menorNum) {
            menorNum = element
        }
    })
    return menorNum
}

console.log(menorNumero3([4, 1, 23, 7, 9, 34]))
