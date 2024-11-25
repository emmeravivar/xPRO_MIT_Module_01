// //CALLBACK
// function greeting(name) {
//    return name;
// }

// function processUser(callbackFunction) {
//    const result = callbackFunction('John'); // Llama al callback con 'John'
//    console.log(result); // Imprime el resultado
// }

// // Pasamos la función greeting como una referencia
// processUser(greeting);


// SET TIME OUT
function saludar() {
   console.log("¡Hola, mundo!");
}
// Ejecuta la función 'saludar' después de 2 segundos
setTimeout(saludar, 2000);

// //SET INTERVAL
function mostrarMensaje() {
   console.log("Este mensaje se mostrará cada 2 segundos.");
}

// // Ejecuta 'mostrarMensaje' cada 2000 milisegundos (2 segundos)
setInterval(mostrarMensaje, 2000);

//CALLBACK TO HELL
setTimeout(function () {
   console.log('Step 1 complete');
   setTimeout(function () {
     console.log('Step 2 complete');
     setTimeout(function () {
       console.log('Step 3 complete');
       setTimeout(function () {
         console.log('Step 4 complete');
         // infinite…
       }, 4000);
     }, 3000);
   }, 2000);
 }, 1000);
 