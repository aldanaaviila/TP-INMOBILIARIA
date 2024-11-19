// Selección de elementos
let sliderFotos = document.querySelector('.slider-fotos .slider-container');
let images = document.querySelectorAll('.slider-fotos img');

// Variables del slider
let index = 0;  // Comienza en la primera imagen

// Función para actualizar el slider
setInterval(function () {
    let movimiento = index * -100;  // Mueve el slider un 100% de la anchura de la imagen
    sliderFotos.style.transform = 'translateX(' + movimiento + "%)";
    
    index++;  // Aumenta el índice para la siguiente imagen
    if (index >= images.length) {  // Si el índice es mayor o igual a la cantidad de imágenes
        index = 0;  // Vuelve a la primera imagen
    }
}, 3500);