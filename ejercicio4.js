var tipoBox = 0;//border falso
var tipoCaja =0;//content verdadero

const padding = 10;
const width =300;
const border = 2;

var calcularcaja =0;
tipo = parseInt(prompt("Ingrese el tipo de caja a dibujar // 0=Border // 1= content"))

calcularcaja = caja (tipo,padding,width,border);

function caja(tipoCaja,p,w,b) {
    if (tipoCaja === 0){
        console.log(`el ancho del contenido es: ${w} pixeles`)
    }
    else if (tipoCaja === 1) {
    console.log(`El ancho del border-box es de: ${p+w+b}pixeles `)
        
    }
    
}
