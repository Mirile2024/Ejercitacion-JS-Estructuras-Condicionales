// 8. En una tienda de descuento se efectúa una promoción en la cual se hace un descuento sobre el valor de la compra total según el color de la bolita que el cliente saque al pagar en caja. 
// Si la bolita es de color blanco no se le hará descuento alguno, si es verde se le hará un 10% de descuento, si es amarilla un 25%, si es azul un 50% y si es anaranjada un 100%. 

const prompt = require('prompt-sync')({ siging: true })
let compra = parseInt(prompt('Ingresar el Valor de compra: '))

const colorBolilla = Math.round(Math.random() * (5 - 1) + 1)

// Determinar la cantidad final que el cliente deberá pagar por su compra si se sabe que solo hay bolitas de los colores mencionados.
const bolillaBca = 0
const bolillaVde = 10
const bolillaAma = 25
const bolillaAzul = 50
const bolillaNar = 100

let descuento
switch (colorBolilla) {
    case 1:
        descuento = bolillaBca
        break;
    case 2:
        descuento = bolillaVde
        break;
    case 3:
        descuento = bolillaAma
        break;
    case 4:
        descuento = bolillaAzul
        break;
    case 5:
        descuento = bolillaNar
        break;


    default:
        descuento = bolillaBca

        break;
}
let totalCompra = compra - ((descuento/100)*compra)
console.log(`el valor de compra es ${compra} y con el descuento del ${descuento}% Debera abonar ${totalCompra}`)
