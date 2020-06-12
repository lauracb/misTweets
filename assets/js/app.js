// Variables
const listaTweets = document.getElementById('lista-tweets');


// Event Listeners

eventListeners();

function eventListeners() {
    // Cuando se envía el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

}


// Funciones

// Añadir tweet del formulario
function agregarTweet(e){
    e.preventDefault();
    // Leer el valor del text area
    const tweet = document.getElementById('tweet').value;
    // Crear botón de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    //Creat elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // Añade el botón de borrar al tweet
    li.appendChild(botonBorrar)
    // Añade el tweet a la lista;
    listaTweets.appendChild(li);
}