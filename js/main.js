// Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado

const nums = [1, 2, 5, 14, 24, 31, 50, 105]

// Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]

nums.sort((a, b) => Math.random() - 0.5);
console.log(nums);