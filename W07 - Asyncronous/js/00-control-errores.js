//son métodos
const promesa = new Promise((resolve, reject) => {
    const exito = true; // Cambia esto a false para simular un error
    if (exito) {
        resolve("Operación exitosa.");
    } else {
        reject("Ocurrió un error.");
    }
});

promesa
    .then((resultado) => {
        console.log(resultado); // Manejo del resultado
    })
    .catch((error) => {
        console.error(error); // Manejo del error
    });

//estructura de control
const funcionAsync = async () => {
    try {
        const resultado = await promesa; // Espera y maneja la promesa
        console.log(resultado);
    } catch (error) {
        console.error(error); // Manejo del error
    }
};

funcionAsync();