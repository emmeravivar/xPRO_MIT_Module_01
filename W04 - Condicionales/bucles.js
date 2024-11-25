// loops
let shoppingList = ["manzanas", "pan", "leche", "huevos"];

for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]); // Imprime cada elemento de la lista de compras
}


// En este ejemplo, el bucle for recorre cada elemento de la lista de compras y los muestra en la consola.


let count = 0;
while (count < 5) {
    console.log(count); // Prints numbers from 0 to 4
    count++;
}


let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit); // Prints each fruit: apple, banana, orange
}


do {
    // Código a ejecutar
} while (condición);

let contador = 1;

do {
    console.log(contador);
    contador++;
} while (contador <= 5);