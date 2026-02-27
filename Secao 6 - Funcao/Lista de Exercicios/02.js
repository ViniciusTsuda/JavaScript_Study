function ehTriangulo(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3) {
        console.log('Triangulo Equilátero')
    } else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        console.log('Triângulo Isósceles')
    } else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
        console.log('Triângulo Escaleno')
    }
}

ehTriangulo(10,20,30)