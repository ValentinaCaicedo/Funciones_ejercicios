var a =0;
var b =0;

var calcular_multiplicacion =0;
a = prompt("Digite un numero")
b = prompt("Digite un numero")
calcular_multiplicacion= multiplicacion(a,b)

function multiplicacion(nA, nB){
    const result = nA * nB;
    console.log("El resultado de la multiplicacion es:"+result);

}