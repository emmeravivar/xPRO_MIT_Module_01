// Fetch API desde un JSON (Objeto)

const cargarJSONArrayBtn = document.querySelector('#loadJsonArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('data/empleados.json') 
        .then( respuesta => {
            return respuesta.json()
        }) 
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado)
        })
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('#result');

    let html = '';

    empleados.forEach( empleado => {
        const { id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>Empleado: ${nombre} </p>
            <p>ID: ${id} </p>
            <p>Empresa: ${empresa} </p>
            <p>Trabajo: ${trabajo} </p>
        `
    });

    contenido.innerHTML = html;
    
}