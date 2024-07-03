// 3. Ordenar en forma creciente tres valores diferentes A, B, C.

const numeroA = 23
const numeroB = 15
const numeroC = 34
// var arrayNumbers = [23, 15, 34]
var arrayNumbers = [(numeroA),(numeroB),(numeroC)]
// esta funcion hace que se ordenen bien
console.log(arrayNumbers.sort(function (a, b){
    return a - b;
}))
