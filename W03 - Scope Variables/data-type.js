// Declaración de variables y la inicialización
const numero = 586;           // Tipo number
const texto = "Hola, mundo"; // Tipo string
const verdadero = true;      // Tipo boolean
const arreglo = [1, 2, 3];   // Tipo array (object en realidad)
const objeto = { nombre: "Juan", edad: 25 }; // Tipo object
const indefinido = undefined; // Tipo undefined

// Mostrar el tipo de cada variable usando typeof
console.log("El tipo de 'numero' es:", typeof numero); // number
console.log("El tipo de 'texto' es:", typeof texto); // string
console.log("El tipo de 'verdadero' es:", typeof verdadero); // boolean
console.log("El tipo de 'arreglo' es:", typeof arreglo); // object
console.log("El tipo de 'objeto' es:", typeof objeto); // object
console.log("El tipo de 'indefinido' es:", typeof indefinido); // undefined

// Saber si es o no un Array
console.log("es un array?", Array.isArray(objeto));  // true


/* 
    1. ¿Qué valor devuelve typeof para cada uno de los tipos de datos?
    2. ¿Por qué typeof devuelve "object" para un arreglo si es una lista?
    3. ¿Qué sucede si intentas asignar un valor a indefinido y luego usas typeof? 
*/


/* 
    - number: Representa números (enteros o decimales).
    - string: Representa cadenas de texto.
    - boolean: Representa valores lógicos (true o false).
    - array: Un conjunto ordenado de elementos (en realidad es un tipo especial de objeto).
    - object: Colección de pares clave-valor.
    - undefined: Representa variables que se han declarado pero no tienen asignado ningún valor. 

    - La función typeof en JavaScript devuelve una cadena que indica el tipo de la variable. 
*/

