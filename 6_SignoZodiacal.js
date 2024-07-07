// 6. Escribir un algoritmo que permita dada la fecha de nacimiento de una persona saber cuál es su signo zodiacal.
const prompt = require('prompt-sync')({ siging: true })
let dia = parseInt(prompt('ingrese Dia: '))
let mes = parseInt(prompt('ingrese Mes: '))

// Aries: 21 de marzo al 19 de abril -->            si es >=21 de 3         o    <=19 de 4            entonces es Aries
// Tauro: 20 de abril y al 20 de mayo-->            si es >=20 de 4         o    <=20 de 5            entonces es Tauro
// Géminis: 21 de mayo al 20 de junio-->            si es >=21 de 5         o    <=20 de 6            entonces es Geminis
// Cáncer: 21 de junio al 22 de julio-->            si es >=21 de 6         0    <=22 de 7            entonces es Cáncer
// Leo: 23 de julio al 22 de agosto -->             si es >=23 de 7         0    <=22 de 8            entonces es Leo
// Virgo: 23 de agosto al 22 de septiembre-->       si es >=23 de 8         o    <=22 de 9            entonces es Virgo
// Libra: 23 de septiembre al 22 de octubre-->      si es >=23 de 9         o    <=22 de 10           entonces es Libra
// Escorpio: 23 de octubre al 21 de noviembre-->    si es <=23 de 10        o    <=21 de 11           entonces es Escorpio
// Sagitario: 22 de noviembre al 21 de diciembre--> si es <=22 de 11        o    <= 21 de 12          entonces es Sagitario
 // Capricornio: 22 de diciembre al 19 de enero-->   si es <=22 de 12        o    <=19 de 1            entonces es Capricornio
// Acuario: 20 de enero al 18 de febrero-->         si es <=20 de 1         o    <=18 de 2            entonces es Acuario
// Piscis: 19 de febrero al 20 de marzo-->          si es <=19 de 2         o    <=20 de 3            entonces es Picis



if (dia >= 21 && mes == '3' || dia <= 19 && mes == '4') {
    console.log('Su signo es Aries');
}
if (dia >= 20 && mes == '4' || dia <= 20 && mes == '5') {
    console.log('Su signo es Tauro');
}
if (dia >= 21 && mes == '5' || dia <= 20 && mes == '6') {
    console.log('Su signo es Geminis');
}
if (dia >= 21 && mes == '6' || dia <= 22 && mes == '7') {
    console.log('Su signo es Cáncer');
}
if (dia >= 23 && mes == '7' || dia <= 22 && mes == '8') {
    console.log('Su signo es Leo');
}
if (dia >= 23 && mes == '8' || dia <= 22 && mes == '9') {
    console.log('Su signo es Virgo');
}
if (dia >= 23 && mes == '9' || dia <= 22 && mes == '10') {
    console.log('Su signo es Libra');
}
if (dia >= 23 && mes == '10' || dia <= 21 && mes == '11') {
    console.log('Su signo es Escorpio');
}
if (dia >= 22 && mes == '11' || dia <= 21 && mes == '12') {
    console.log('Su signo es Sagitario');
}
if (dia >= 22 && mes == '12' || dia <= 19 && mes == '1') {
    console.log('Su signo es Capricornio');
}
if (dia >= 20 && mes == '1' || dia <= 18 && mes == '2') {
    console.log('Su signo es Acuario');
}
if (dia >= 19 && mes == '2' || dia <= 20 && mes == '3') {
    console.log('Su signo es Picis');
}

