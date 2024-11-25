/* En JavaScript, un método es básicamente una función 
que se asocia a un objeto. Cuando definimos un método, 
lo estamos haciendo dentro del contexto de un objeto, 
lo que nos permite manipular las propiedades de ese objeto de manera específica. 
Los métodos son una parte fundamental del paradigma de programación orientada a objetos en JavaScript. */

/* Un método es una función que se comporta como una propiedad de un objeto. 
A diferencia de una función normal, un método se llama a través del objeto al que pertenece. 
Por ejemplo: */

const persona = {
    nombre: 'Juan',
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }
  };
  
  persona.saludar(); // Salida: Hola, mi nombre es Juan

  /* En este caso, saludar es un método del objeto persona. Aquí, la palabra clave this se refiere al 
  propio objeto persona, lo que permite acceder a sus propiedades internas.*/

// Sintaxis de métodos abreviada
  const coche = {
    marca: 'Toyota',
    arrancar() {
      console.log('El coche está arrancando...');
    }
  };
  
  coche.arrancar(); // Salida: El coche está arrancando...
  

  