let arrayAnidado = [
    ["Manzana", "Pera", "Naranja"],
    ["Zanahoria", "Lechuga", "Tomate"],
    ["Pollo", "Carne", "Pescado"]
];

// Acceder a un elemento del array anidado
console.log(arrayAnidado[0][1]);  // Salida: Pera


let arrayMultidimensional = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
];

// Acceder a un elemento en el array tridimensional
console.log(arrayMultidimensional[1][0][2]);  // Salida: 9


const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
    // Imprime el doble de cada número
    console.log(num * 2);  
});
// Salida: 2, 4, 6, 8, 10

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled);  // Salida: [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => {
    // Devuelve el doble de cada número
    return num * 2; 
});

console.log(doubled);  // Salida: [2, 4, 6, 8, 10]


const string = "Hello, world!";
console.log(string.length); // 12

const string = "JavaScript is great";
const array = string.split(" ");
console.log(array); // ["JavaScript", "is", "great"]

const string = "Hello, world!";
console.log(string.substring(0, 4)); // "Hell"

const string = "Hello, world!";
console.log(string.indexOf("world")); // 7
console.log(string.indexOf("does not exist")); // -1

// User data
const name = "Juan";
const date = new Date();

// Create a message using template literals
const message = `Hello, ${name}! Today is ${date.toLocaleDateString()}.`;

// Display the message in the console
console.log(message);


const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5


const square = x => {
    return x * x;
};
console.log(square(4)); // Output: 16

