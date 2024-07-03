// 1. Leer una variable N de tipo entero e informar si el numero es positivo, negativo o cero y también si es par, impar o cero. El número cero no es ni positivo ni negativo ni par ni impar.
const min=-10
const max=10
const N= Math.round(Math.random()*(max-min) + min)
console.log(N);
// condiciones para determinar que clase de numero es par, impar, positivo, negativo o cero.
if(N === 0){
  console.log('el numero es cero')
}
  else{
    if ( N > 0 ) {
      console.log('el numero es positivo')
    }
    else{
      console.log('el numero es negativo')
    }
    if (N % 2 === 0){
      console.log('el numero es par');
    }

  }