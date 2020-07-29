//tres lados de un triangulo, determinando que tipo es
var ladoA = 0;
var ladoB = 0;
var ladoC = 0;
var calcularTipoTriangulo = 0;

ladoA = parseInt((prompt('Ingrese lado A')))
ladoB = parseInt((prompt('Ingrese lado B')))
ladoC = parseInt((prompt('Ingrese lado C')))

calcularTipoTriangulo = TipoTriangulo(ladoA, ladoB, ladoC);

function TipoTriangulo(LA, LB, LC) {
    if (LA == LB && LB ==LC) {
        console.log('El triangulo es equilatero');
    }else{
        if (LA == LB || LA == LC || LB == LC) {
            console.log('El triangulo es isoceles')
        }else{
            if (LA != LB || LA != LC || LC != LB) {
                console.log('El triangulo es escaleno')
            }
        }
    }
    
}