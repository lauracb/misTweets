// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners

eventListeners();

function eventListeners() {
    // Cuando se envía el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);

    // Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
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

    // Añadir a LocalStorage
    agregarTweetLocalStorage(tweet);
}

// Elimina el Tweet del DOM
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }     
}

// Mostrar datos de local Storage en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    
    tweets.forEach(function(tweet) {
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
    });
}

// Agrega tweet a LocalStorage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    // Añadir el nuevo Tweet
    tweets.push(tweet);
    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Comprobar que hay elementos en local storage, retorna arreglo
function obtenerTweetsLocalStorage() {
    let tweets;
    // Revisamos los valores de local Storage
    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets')); 
    }
    return tweets;
}

// Eliminar tweet de local Storage
function borrarTweetLocalStorage(tweet) {

    let tweets, tweetBorrar;
    // Elimina la X del Tweet
    tweetBorrar = tweet.substring(0, tweet.length-1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
        if(tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));

}
