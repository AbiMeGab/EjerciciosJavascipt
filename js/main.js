let btnVal = document.getElementById("btnValidar");
let campo1 = document.getElementById("n1");
let campo2 = document.getElementById("n2");
let campo3 = document.getElementById("n3");
let res = document.getElementById("alertResultado");
const nums = [campo1.value, campo2.value, campo3.value];

// 1. Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor

btnVal.addEventListener("click", function (e) {
    for (i=1; i<(campo1.value, campo2.value, campo3.value); i++) {
    res.innerHTML = ("Tu número es: " + Math.max(campo1.value, campo2.value, campo3.value));

    if (campo1.value, campo2.value, campo3.value > 100) {
        res.innerHTML = ("Tu número es mayor a 100");
    }
}
});

// 2. Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números

btnVal.addEventListener("click", function (e) {
    for (i=1; i<(campo1.value, campo2.value, campo3.value); i++) {
    res.innerHTML = ("Tu número es: " + Math.min(campo1.value, campo2.value, campo3.value));

    if (campo1.value, campo2.value, campo3.value > 100) {
        res.innerHTML = ("Tu número es mayor a 100");
    }
}
});

// 3. Adivinar un número entre el 1 y el 100 en el menor número de pasos posibles
// 4. Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
// 5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
// 6. Elabora un algoritmo para leer un número y determinar si es par o impar

