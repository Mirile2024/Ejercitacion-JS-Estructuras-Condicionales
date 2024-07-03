// 2. Una institución de educación, con carreras tanto diurnas como vespertinas, considera lo siguiente en su proceso académico:
// si un estudiante de carrera vespertina tiene una nota de presentación mayor o igual a 6, se exime, y si no alcanza el 6 pero tiene una nota de presentación igual o mayor a 3.5, rinde examen. 
// Si el estudiante es de carrera diurna y si su nota de presentación es mayor o igual a 3.5, rinde examen (no hay posibilidad de eximirse). 
// En ambos regímenes, si la nota de presentación es menor que 3.5, reprueba. 
// Hacer la tabla de decisión y escribir el algoritmo correspondiente.
const prompt = require('prompt-sync')({ siging: true })
const carrera = prompt('ingrese su carrera: ')
const nota = prompt('ingrese su nota: ')

//              Vespertina  Diurna   Salida
// Nota >=6        x               Promociona
// Nota >=6                   x    Rinde Examen
// Nota >=3.5      x          x    Rinde Examen
// Nota <3.5       x          x    Reprueba

// if (carrera === 'Vespertina') {
//     if (nota >= 6)  {
//         console.log('Promociona')
//     } else if (nota >= 3.5) {
//         console.log('Rinde Examen')
//      } else {
//         console.log('Reprueba')
//     }
// } 
// else {
//     // carrera = diurna
//     if (nota >= 3.5) {
//         console.log('Rinde Examen')
//     }
//     else {
//         console.log('Reprueba')
//     }
// }

if (nota < 3.5){
    console.log('Reprueba')
} else { 
    if (carrera === 'Vespertina' && nota >= 6) {
    console.log('Promociona')
}else{
console.log('Rinde Examen')
    }
}

