// script.js

// Selección de elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Función para agregar una tarea nueva
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // Evita agregar tareas vacías

    // Crear un nuevo elemento de lista para la tarea
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    
    // Crear el texto de la tarea
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    // Crear botón de eliminar
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Eliminar';
    removeBtn.classList.add('remove-btn');
    
    // Evento para eliminar la tarea al hacer clic en el botón
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    // Insertar el texto y el botón en el elemento de lista
    taskItem.appendChild(taskContent);
    taskItem.appendChild(removeBtn);

    // Agregar la tarea a la lista
    taskList.appendChild(taskItem);

    // Limpiar el campo de texto
    taskInput.value = '';
}

// Evento de clic para agregar una tarea nueva
addTaskBtn.addEventListener('click', addTask);
