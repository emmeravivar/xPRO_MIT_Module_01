console.log(this); // En un navegador, mostrará el objeto window


const miFuncion = function() {
    console.log("Esta es una función anónima.");
};

// Llamando a la función
miFuncion(); // "Esta es una función anónima."


const miFuncionFlecha = r => console.log("Esta es una función de flecha.", r);

// Llamando a la función
miFuncionFlecha("a"); // "Esta es una función de flecha."


const objeto = {
    valor: 42,
    mostrarValor: function() {
        setTimeout(() => {
            console.log(this.valor); // `this` se refiere a `objeto`, así que imprime 42
        }, 1000);
    }
};

objeto.mostrarValor(); // Después de 1 segundo, imprime 42


let arrayNested = [
    ["Apple", "Pear", "Orange"],
    ["Carrot", "Lettuce", "Tomato"],
    ["Chicken", "Meat", "Fish"]
];

// Access an element from the nested array
console.log(arrayNested[0][1]);

// Output: Pear


let multidimensionalArray = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
];

// Access an element in the three-dimensional array
console.log(multidimensionalArray[1][0][2]);
// Output: 9


setTimeout(function() {
    console.log("This is an anonymous function!");
}, 1000);


const numbers = [1, 2, 3];
numbers.forEach(function(number) {
    console.log(number * 2);
});


const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5


const square = x => {
    return x * x;
};
console.log(square(4)); // Output: 16
