// 4. Escribir un algoritmo que con solo ingresar los lados de un triángulo rectángulo le dice al usuario si es isósceles, escaleno o equilátero.

// Isoceles = 2 lados iguales y uno distinto -->(A == B y A != C) o (B == C y A != B) o (A == C y A != B)
// Equilatero = los 3 lados iguales --> A == B == C -->A == B y B == C
// Escaleno = los 3 lados distintos -->A! = B != C --> A != B y B !=C y A !=C

const prompt = require('prompt-sync')({ siging: true })
const  A = prompt('ingrese lado A: ')
const  B = prompt('ingrese lado B: ')
const  C = prompt('ingrese lado C: ')

if(A == B && B == C){
    console.log('es un triangulo equilatero')
}else if(A == B || B == C || A == C){
    console.log('es un triangulo isoceles')
} else {
    console.log('es un triangulo escaleno');
}