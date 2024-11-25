// TEST - Variables

function testVariables() {

  if (true) {
    var varVariable = "Soy una variable var";
    let letVariable = "Soy una variable let"
    const constVariable = "Soy una variable const";

    // Dentro del bloque
    console.log("Dentro del bloque - var:", varVariable);   // Funciona
    console.log("Dentro del bloque - let:", letVariable);   // Funciona
    console.log("Dentro del bloque - const:", constVariable); // Funciona
  }

  // Fuera del bloque
  console.log("Fuera del bloque - var:", varVariable);   // Funciona
  console.log("Fuera del bloque - let:", letVariable);   // Error
  console.log("Fuera del bloque - const:", constVariable); // Error
}

testVariables();

/* 

  1.¿Qué sucede cuando intentas acceder a las variables let y const fuera del bloque if?
  2.¿Por qué la variable varVariable sigue funcionando fuera del bloque?
*/