// const url = 'https://jsonplaceholder.typicode.com/posts/1'; // Valida
// const url = 'https://jsonplaceholder.typicode.com/post'; // Error 404
const url = 'https://url.inexistente'; // Error inexistente

const messageDiv = document.getElementById('message');

// Función para crear y agregar mensajes dinámicamente
const createMessage = (message, className) => {
    // Limpiar cualquier mensaje previo
    messageDiv.innerHTML = '';

    // Crear un nuevo elemento
    const messageElement = document.createElement('p');
    messageElement.textContent = message; // Añadir texto
    messageElement.classList.add(className); // Añadir la clase de estilo

    // Agregar el mensaje al contenedor
    messageDiv.appendChild(messageElement);
};

const basicReponseHTTPError = () => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            // Usar la función para mostrar éxito
            createMessage(`¡Solicitud exitosa! Datos recibidos: ${JSON.stringify(data, null, 2)}`, 'success');
        })
        .catch((error) => {
            // Usar la función para mostrar error
            createMessage(`Error: ${error.message}`, 'error');
        });
};

// Ejecutar la función
basicReponseHTTPError();
