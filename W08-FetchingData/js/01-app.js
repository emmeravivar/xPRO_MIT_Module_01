// Fetch API consumir datos desde un txt...
const cargarTxtBtn = document.querySelector('#loadTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

    fetch('data/datos.txt') // URL
        .then( respuesta => {
            console.log(respuesta);
            console.log(respuesta.headers.get("Content-Type"));
            console.log(respuesta.status); // Estado
            console.log(respuesta.statusText); //estado en ingles
            console.log(respuesta.url); // URL a la que consultamos
            console.log(respuesta.type); // Tipo de consulta

            // Hay que decirle que método vamos a utilizar...

            // Hay 2 JSON o Texto

            return respuesta.text(); // Que este mal escrito

        })
        .then( datos => {
            console.log(datos);
            mostrarHTML(datos);
        })
        .catch( error => {
            console.log(error);
        })
}

function mostrarHTML(resultado) {
    const contenido = document.querySelector('#result');

    contenido.innerHTML = `
        <p>${resultado}</p>
    `
}