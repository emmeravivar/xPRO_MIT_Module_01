let valor = 0; // Cambia este valor para probar

if (valor) {
    console.log("El valor es truthy");
} else {
    console.log("El valor es falsy");
}


// let objeto = { clave: "valor" }; // Cambia este valor para probar

// if (objeto) {
//     console.log("El objeto es truthy");
// } else {
//     console.log("El objeto es falsy");
// }

// Función para evaluar la edad
// function evaluarEdadd(edad) {
//     // Comprobamos si la edad es falsy
//     if (!edad) {
//         console.log("Por favor, ingresa una edad válida.");
//     } else {
//         console.log(`Tienes ${edad} años.`);
//     }
// }

// // Prueba de la función con diferentes entradas
// evaluarEdad(0);          // "Por favor, ingresa una edad válida." (falsy)
// evaluarEdad("");         // "Por favor, ingresa una edad válida." (falsy)
// evaluarEdad(undefined);  // "Por favor, ingresa una edad válida." (falsy)
// evaluarEdad(null);       // "Por favor, ingresa una edad válida." (falsy)
// evaluarEdad(25);         // "Tienes 25 años." (truthy)


// Función para evaluar la edad
// function evaluarEdad(edad) {
//     // Comprobamos si la edad es un número y mayor que cero
//     if (edad === undefined || edad === null || edad === 0 || isNaN(edad)) {
//         console.log("Por favor, ingresa una edad válida.");
//     } else {
//         console.log(`Tienes ${edad} años.`);
//     }
// }

// // Prueba de la función con diferentes entradas
// evaluarEdad(0);          // "Por favor, ingresa una edad válida."
// evaluarEdad("");         // "Por favor, ingresa una edad válida."
// evaluarEdad(undefined);  // "Por favor, ingresa una edad válida."
// evaluarEdad(null);       // "Por favor, ingresa una edad válida."
// evaluarEdad("abc");      // "Por favor, ingresa una edad válida." (NaN)
// evaluarEdad(25);         // "Tienes 25 años."



// Variables de ejemplo
let usuarioLogueado = true;  // El usuario está logueado (truthy)
let tienePermisos = false;    // El usuario no tiene permisos (falsy)

// Evaluación con el operador AND (&&)
if (usuarioLogueado && tienePermisos) {
    console.log("Acceso permitido.");
} else {
    console.log("Acceso denegado. Necesitas estar logueado y tener permisos.");
}

// // Evaluación con el operador OR (||)
// if (usuarioLogueado || tienePermisos) {
//     console.log("Al menos tienes acceso a algo.");
// } else {
//     console.log("No tienes acceso a nada.");
// }

// // Example variables
// let userLoggedIn = true;  // The user is logged in (truthy)
// let hasPermissions = false;    // The user does not have permissions (falsy)

// // Evaluation with the AND operator (&&)
// if (userLoggedIn && hasPermissions) {
//     console.log("Access granted.");
// } else {
//     console.log("Access denied. You need to be logged in and have permissions.");
// }

// // Evaluation with the OR operator (||)
// if (userLoggedIn || hasPermissions) {
//     console.log("At least you have access to something.");
// } else {
//     console.log("You have no access to anything.");
// }
