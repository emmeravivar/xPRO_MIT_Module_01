// Declaración de variables
let variableNull = null;          // Variable inicializada como null
let variableUndefined;            // Variable sin inicializar (undefined)

// Imprimir valores y tipos
console.log("Valor de variableNull:", variableNull); // null
console.log("Tipo de variableNull:", typeof variableNull); // object

console.log("Valor de variableUndefined:", variableUndefined); // undefined
console.log("Tipo de variableUndefined:", typeof variableUndefined); // undefined

// Comparaciones
console.log("Comparación con == (null == undefined):", variableNull == variableUndefined); // true
console.log("Comparación con === (null === undefined):", variableNull === variableUndefined); // false
