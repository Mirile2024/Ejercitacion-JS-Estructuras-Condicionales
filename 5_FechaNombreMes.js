// 5. Leer un valor de Día, Mes y Año de una fecha (ej.: 10-5-2003). Mostrar la fecha con el respectivo nombre del mes (ej.: 10-mayo-2003). 
// Si el número leído para el mes no está entre 1 y 12 imprimir un mensaje de error. 

const prompt = require('prompt-sync')({ siging: true })
let dia = parseInt(prompt('ingrese Dia: '))
let mes = parseInt(prompt('ingrese Mes: '))
let año = parseInt(prompt('ingrese Año: '))

// Comprobar que el día se encuentre entre 1 y 31 y el año sea mayor que 2000.
// PromptSync
// const dia = 2
// const mes = 12
// const año = 2022

if (dia > 31 || dia < 1 || año <2000){
    console.log('Ingrese Nueva Fecha');
}else {

let nombreMes
switch (mes) {
    case 1:
        nombreMes = 'Enero';

        break;
    case 2:
        nombreMes = 'Febrero';

        break;
    case 3:
        nombreMes = 'Marzo'

        break;
    case 4:
        nombreMes = 'Abril'

        break;
    case 5:
        nombreMes = 'Mayo'

        break;
    case 6:
        nombreMes = 'Junio'

        break;
    case 7:
        nombreMes = 'Julio'

        break;
    case 8:
        nombreMes = 'Agosto'

        break;
    case 9:
        nombreMes = 'Septiembre'

        break;
    case 10:
        nombreMes = 'Octubre'

        break;
    case 11:
        nombreMes = 'Noviembre'

        break;
    case 12:
        nombreMes = 'Diciembre'

        break;

    default:
        nombreMes = 'Mes Invalido'
        break;
}
// ----------concatenar-----------
console.log(dia + '-' + nombreMes + '-' + año);

}