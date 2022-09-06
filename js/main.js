// ## Ejercicio #3
// Escribir una función que permita saber si un número se repite dentro de un arreglo.

// > Blockquote
// **Casos de prueba**:

// _Caso 1_: Resultado esperado: El número 5 se encuentra más de una vez
let caso1 = [1, 22, 5, 17, 10, 5, 40, 5];

// _Caso 2_: Resultado esperado: El número 7 se encuentra más de una vez
let caso2 = [7, 41, 5, 7, 10, 13, 2];

// _Caso 3_: Resultado esperado: No hay números repetidos
let caso3 = [1, 22, 5, 14, 24, 31, 27, 15, 105];


function numsrepetidos (caso1) {

    for ( let i = 0; i < caso1.length; i++) {
        let rep = 0;
        for (let j = i + 1; j < caso1.length; j++) {
            if (caso1[i] == caso1[j]) {
                rep ++;
            } 
        }if (rep!=0) {
        console.log(m);
            }
    } 
}


var m = numsrepetidos(caso1);