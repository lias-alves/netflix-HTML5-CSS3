const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----Event listener para la flecha derecha-------
flechaDerecha.addEventListener('click', () => {
     fila.scrollLeft += fila.offsetWidth;
});

// ? ----Event listener para la flecha izquierda-------
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

// ? -----  Paginacion  -----
const numeroPaginas = Math.ceil(peliculas.length / 5);