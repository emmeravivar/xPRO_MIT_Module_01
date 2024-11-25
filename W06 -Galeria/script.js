const contenedor = document.querySelector('.mi-contenedor')
const boton = document.querySelector('button')
console.log(boton);

const createNewElement = () => {
    console.log('Leyendo....');
//  Crear la etiqueta
 const element = document.createElement('a')

 element.textContent ='Hola'
 element.classList.add('invisible')

 //Donde lo vamos a crear
 contenedor.appendChild(element)

}

// createNewElement()

boton.addEventListener('click', createNewElement)