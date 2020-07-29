//calcular mes
var num = 0;
var mes = 0;

num = parseInt(prompt('ingresa un numero de 1 a 12'));
mes = calcularmes (num)
alert ('El mes es:'+mes);

function calcularmes(numero) {
    if (numero == 1) {
        console.log('El mes es Enero');
        return (numero)
    } else if (numero == 2){
        console.log('El mes es febrero');
        return (numero)
    }else if (numero == 3){
        console.log('El mes es Marzo');
        return (numero)
    }else if (numero == 4){
        console.log('El mes es Abril');
        return (numero)
    }else if (numero == 5){
        console.log('El mes es Mayo');
        return (numero)
    }else if (numero == 6){
        console.log('El mes es Junio');
        return (numero)
    }else if (numero == 7){
        console.log('El mes es Julio');
        return (numero)
    }else if (numero == 8){
        console.log('El mes es Agosto');
        return (numero)
    }else if (numero == 9){
        console.log('El mes es Septiembre');
        return (numero)
    }else if (numero == 10){
        console.log('El mes es Octubre');
        return (numero)
    }else if (numero == 11){
        console.log('El mes es noviembre');
        return (numero)
    }else if (numero == 12){
        console.log('El mes es Diciembre');
        return (numero)
    }else {
        console.log('El mes no existe-------Error--------');
        return 'No existe'
    }
}
