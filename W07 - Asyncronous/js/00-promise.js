// //crearla
// const miPromise = new Promise((resolve, reject) => {
//     const respuesta = true;
//     if (respuesta) {
//       resolve('respuesta es true');
//     } else {
//       reject('respuesta es false');
//     }
//   });

// //consumirla
// miPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//PROMISE ALL

const llamarBBDD = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos de la base de datos obtenidos.");
        }, 1000); // Simula una espera de 2 segundos
    });
};

const descargandoDatosBBDD = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos descargados.");
        }, 3000); // Simula una espera de 1 segundo
    });
};
// Función principal que usa Promise.all
const appPromiseAll = async () => {
    try {
        // Promise.all() permite ejecutar varias promesas a la vez
        const respuesta = await Promise.all([llamarBBDD(), descargandoDatosBBDD()]);
        console.log(respuesta); // Imprime las respuestas de ambas promesas
    } catch (error) {
        console.log(error); // Manejo de errores
    }
};

// Llamar a la función
appPromiseAll(); // Inicia la promesa