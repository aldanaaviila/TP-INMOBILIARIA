const d = document;

// array de imágenes
let arrayImagenes = [
    "images/propiedades/casa 1.jpg",
    "images/propiedades/casa 2.jpg",
    "images/propiedades/casa 3.jpg",
];

// Selección de los id del DOM
let imagenPrincipal = d.querySelector('#foto');
let anterior = d.querySelector('#anterior');
let siguiente = d.querySelector('#siguiente');
let galeriaImagenes = d.querySelectorAll('.slider-img img');

console.log(imagenPrincipal, anterior, siguiente, galeriaImagenes);

// Cambia la imagen grande cuando se hace clic en la flecha
for (let img of galeriaImagenes) {
    img.addEventListener('click', (e) => {
        imagenPrincipal.src = e.target.src;
    });
}

// Variables para la navegación de imágenes
let movimientoImgs = 1,
    posicionActual = 0,
    posicionInicial = 0,
    posicionFinal = arrayImagenes.length - 1;  // Ajuste final para que no sobrepase el rango

// Función flecha para la navegación (anterior y siguiente)
const Navegacion = (direccion) => {
    let sentido = direccion == 'ant' ? -1 : 1;
    posicionActual += movimientoImgs * sentido;

    // Control de los topes
    if (posicionActual < posicionInicial) {
        posicionActual = posicionInicial; 
    }
    if (posicionActual > posicionFinal) {
        posicionActual = posicionFinal;  
    }

    galeriaImagenes.forEach((img, i) => {
        img.src = arrayImagenes[i + posicionActual];  
    });

    imagenPrincipal.src = galeriaImagenes[0].src;
};

// Funcionalidad para el botón "anterior"
anterior.addEventListener('click', () => {
    Navegacion('ant');
});

// Funcionalidad para el botón "siguiente"
siguiente.addEventListener('click', () => {
    Navegacion('sig');
});
