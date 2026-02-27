const calcularSalario = (horasPorMes, reaisPorHora) => {
    const salario = horasPorMes * reaisPorHora
    return console.log(`Salário igual a R$${salario}`)
}

calcularSalario(150, 40.5)