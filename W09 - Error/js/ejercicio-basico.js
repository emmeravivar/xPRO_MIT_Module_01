//URL
const url = 'https://jsonplaceholder.typicode.com/posts/1';// Valida
// const url = 'https://jsonplaceholder.typicode.com/post'; //Error 404
// const url = 'https://url.inexistente'; // Error inexistente

const basicReponseHTTPError = () => {
    fetch(url)
    .then((response) => {
        console.log(response);
        // if (!response.ok) {
        // throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        return response.json();
    })
    .catch((error) => {
        console.log('Error capturado en catch:', error.message);
    });
}

basicReponseHTTPError()

/*
    - **`response.ok`**: `false` si el código de estado es 400-599.
    - No se activa el `catch` a menos que `throw` sea usado.
    - Útil para manejar errores específicos de HTTP.
*/