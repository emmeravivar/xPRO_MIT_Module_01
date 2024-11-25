let temperature = 15; 

if (temperature > 25) {
    console.log("Hace calor, ponte ropa ligera.");
} else if (temperature > 15) {
    console.log("Hace una temperatura agradable, ponte ropa cómoda.");
} else {
    console.log("Hace frío, ponte ropa abrigada.");
}

// Si la temperatura es mayor a 25°C, el código indica que hace calor, por lo que se sugiere usar ropa ligera.
// Si la temperatura es mayor a 15°C pero no supera 25°C, se recomienda usar ropa cómoda.
// Si la temperatura es de 15°C o menos, el código sugiere vestirse con ropa abrigada.


switch (expression) {
    case value1:
        // Code if expression === value1
        break;
    case value2:
        // Code if expression === value2
        break;
    default:
        // Code if none of the values match
}

let age = 20;
let result = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(result);


let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive.");
}


let isAdmin = false;
let isEditor = true;

if (isAdmin || isEditor) {
    console.log("You have access to the system.");
}

