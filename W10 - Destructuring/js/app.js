console.log('Ejercicio Destructuring');

/*La desestructuración es una característica clave de ES6 que 
simplifica el acceso y asignación de valores de objetos y arrays en 
JavaScript. */


const alumno = {
    nombre: "Eva",
    nota: 8,
    aprobado: true
};

const alumnos = [
    {
        nombre: "Eva",
        nota: 8,
        aprobado: true
    },
    {
        nombre: "Jose",
        nota: 9,
        aprobado: false
    }
];

/*----- Antes de ES6 ------*/

/* 1. Acceso con sintaxis de punto */
// const nombre = alumno.nombre;
// const nota = alumno.nota;

/* 2.Acceso con sintaxis de corchetes */
// const nombre = alumnos[0].nombre;
// const nota = alumnos[0].nota;


/*--- Después de ES6 -----*/

/* 1. Destructuración de objetos */
// const {nombre } = alumno;
// const { nota } = alumno;


/* 2. Destructuración de arrays */
// const [ { nombre } ] = alumnos[1]; // esto no funciona
const { nombre } = alumnos[1]; // esto no funciona

const [ { nota } ] = alumnos;

console.log(nombre); // Eva
console.log(nota); // 8

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*Sintaxis más limpia: Todo el proceso de extracción y asignación se realiza en una sola línea.
Flexibilidad: Permite extraer solo las propiedades que necesitas.
Compatibilidad con valores predeterminados: Si una propiedad no existe, puedes asignarle un valor predeterminado. */

// const { nombre, media = 4 } = alumno; // "nota" no existe en evaluacion"
// console.log( media); // 0

/*-----*/
/* Errores 
    1. Si intentas extraer una propiedad que no existe y no usas un valor predeterminado, la variable será undefined.
    2. Las llaves ({}) son necesarias para indicar que se extraen propiedades de un objeto.
    */

// const { apellido} = alumno; // "nota" no existe en evaluacion"
// console.log( apellido); // undefined

// const nota = alumno.nota // Sin destructurar
// const { nota } = alumno // Destructurar

/* Puedes extraer múltiples propiedades del mismo objeto en una sola línea.*/

// const { nombre, nota } = alumno;
// const [{ nombre, nota }] = alumnos;