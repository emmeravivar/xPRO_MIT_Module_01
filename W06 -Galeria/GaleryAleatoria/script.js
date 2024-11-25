// script.js

// Contenedor de la galería
const gallery = document.getElementById('gallery');
const addImageBtn = document.getElementById('addImageBtn');

// Función para agregar una imagen a la galería
function addImage() {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');
    
    // Imagen aleatoria
    const img = document.createElement('img');
    img.src = `https://picsum.photos/100?random=${Math.floor(Math.random() * 1000)}`;
    img.alt = 'Imagen aleatoria';
    
    // Botón para eliminar la imagen
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'X';
    
    // Eventos
    imageCard.addEventListener('click', toggleFavorite);
    removeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que el click en el botón marque como favorito
        gallery.removeChild(imageCard);
    });
    
    // Insertar elementos en el contenedor de la imagen
    imageCard.appendChild(img);
    imageCard.appendChild(removeBtn);
    gallery.appendChild(imageCard);
}

// Función para alternar la clase "favorito" de una imagen
function toggleFavorite(event) {
    const imageCard = event.currentTarget;
    imageCard.classList.toggle('favorito');
}

// Agregar una imagen inicial y activar el botón de agregar
addImageBtn.addEventListener('click', addImage);
addImage();
