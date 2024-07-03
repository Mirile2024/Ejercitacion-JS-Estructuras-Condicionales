// 7. En un hospital se ha hecho un estudio sobre los pacientes registrados durante los últimos 10 años, con el objeto de hacer una aproximación de los costos de internación por paciente.
// Se obtuvo un costo promedio diario según el tipo de enfermedad que aqueja al paciente.
// La siguiente tabla expresa los costos diarios, según el tipo de enfermedad:
//
// | Tipo de Enfermedad | Costo/Paciente/Día |
// |--------------------|--------------------|
// | 1                  | 125                |
// | 2                  | 116                |
// | 3                  | 120                |
// | 4                  | 132                |
// | 5                  | 138                |
//
// Construya un algoritmo que calcule e imprima el costo total que representa un paciente.
const prompt = require('prompt-sync')({ siging: true })

// const min = 1
// const max = 5
const tipoEnfermedad = Math.round(Math.random() * (5 - 1) + 1)
const diasInternacion = Math.round(Math.random() * (10 - 1) + 1)
let costoInternacion
switch (tipoEnfermedad) {
    case 1:
        costoInternacion = 125
        break;
    case 2:
        costoInternacion = 165
        break;
    case 3:
        costoInternacion = 120
        break;
    case 4:
        costoInternacion = 132
        break;
    case 5:
        costoInternacion = 138
        break;
    default:
        costoInternacion =  0
        break;
}
const costoTotal = costoInternacion * diasInternacion
// console.log('Tipo de Enfermedad Ingresada: ' + tipoEnfermedad)
// console.log('Dias de Internacion Ingresados: ' + diasInternacion)

// console.log('El costo de internarse en el Hospital es: ' + costoTotal)
console.log(
    `el costo de internarse ${diasInternacion} dias con enfermedad tipo ${tipoEnfermedad} es:  ${costoTotal}`
)