// Fetch API desde un JSON (Array)
const cargarJSONBtn = document.querySelector('#loadJson');
cargarJSONBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('data/empleado.json') 
        .then( respuesta => {
            return respuesta.json()
        }) 
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
}

function mostrarHTML(resultado) {
    const contenido = document.querySelector('#result');

    contenido.innerHTML = `
        <p>${resultado}</p>
    `
}