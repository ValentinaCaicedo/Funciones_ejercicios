var a =0;
var b =0;
var c =0;
var d =0;
var calcularmitad =0;

a = parseInt(prompt("Digite un numero a"));
b = parseInt(prompt("Digite un numero b"));
c = parseInt(prompt("Digite un numero c"));
d = parseInt(prompt("Digite un numero d"));

calcularmitad = calcular(a, b, c, d);

function calcular (nA, nB, nC, nD){
    const result = (nA + nB + nC + nD);
    media = (result / 4);
    console.log("La media de todos los valores es:"+ media);
}