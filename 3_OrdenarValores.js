// 3. Ordenar en forma creciente tres valores diferentes A, B, C.

// A= 3
// B= 1
// C= 1
//  A>B Y A>C Y B>C   C,B,A
//  A>B Y A>C Y B<C   B,C,A 
// B>A Y B>C Y C>A    A,C,B
// B>A Y B>C Y C<A    C,A,B
// C>B Y C>A Y A>B    B,A,C
// C>B Y C>A Y A<B    A,B,C

const prompt = require('prompt-sync')({ siging: true })

const A = (prompt('Valor A: '))
const B = (prompt('Valor B: '))
const C = (prompt('Valor C: '))
// console.log(numero);
if ( A>B && A>C && B>C  ){
    console.log("Ordenados en Forma Creciente")
    console.log({C});
    console.log({B});
    console.log({A});
}else if ( A>B && A>C && B<C){
    console.log("Ordenados en Forma Creciente")
    console.log({B});
    console.log({C});
    console.log({A});
} else if ( B>A && B>C && C>A ){
    console.log("Ordenados en Forma Creciente ")
    console.log({A});
    console.log({C});
    console.log({B});
} else if (  B>A && B>C && C<A ){
    console.log("Ordenados en Forma Creciente ")
    console.log({C});
    console.log({A});
    console.log({B});
} else if (  C>B && C>A && A>B ){
    console.log("Ordenados en Forma Creciente")
    console.log({B});
    console.log({A});
    console.log({C});
} else if (  C>B && C>A && A<B ){
    console.log("Ordenados en Forma Creciente")
    console.log({A});
    console.log({B});
    console.log({C});
}

