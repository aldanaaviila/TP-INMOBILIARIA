// seleccionamos el objeto "document"
const d = document;

// definimos el array que contiene las imagenes del slider
let arrayImagenes = [
    "images/propiedades/casa 1.jpg",
    "images/propiedades/casa 2.jpg",
    "images/propiedades/casa 3.jpg",
];


//elementos del HTML a manipular

let imagenPrincipal = d.querySelector('#foto'); //imagen grande
let anterior = d.querySelector('#anterior'); 
let siguiente = d.querySelector('#siguiente');
let galeriaImagenes = d.querySelectorAll('.slider-img img');//imagenes en miniatura

//bucle de evento de clic en cada imagen en miniatura
for (let img of galeriaImagenes) {
    img.addEventListener('click', (e) => {
        //se muestra la imagen en la que se hace click  
        imagenPrincipal.src = e.target.src;
    });
}

//variables para controlar el mov de las imagenes de la galeria 
let movimientoImgs = 1, //el carrusel de fotos se movera en 1 posicion por cada click
    posicionActual = 0, 
    posicionInicial = 0,
    posicionFinal = arrayImagenes.length - 1; 

const Navegacion = (direccion) => {
    let sentido = direccion == 'ant' ? -1 : 1;
    posicionActual += movimientoImgs * sentido;

    // condicion: si la posición actual es menor que la inicial 
    // se lleva al final del arreglo
    if (posicionActual < posicionInicial) {
        posicionActual = posicionFinal; 
    }
    // condicion: si la posición actual es mayor que la inicial 
    // se lleva al inicio del arreglo
    if (posicionActual > posicionFinal) {
        posicionActual = posicionInicial;  
    }

    galeriaImagenes.forEach((img, i) => {
        img.src = arrayImagenes[(i + posicionActual) % arrayImagenes.length];  
    });

    //hacemos un ciclo para que vuelva a la imagen 1
    imagenPrincipal.src = galeriaImagenes[0].src;
};

// evento click para imagen anterior
anterior.addEventListener('click', () => {
    Navegacion('ant');
});

// evento click para imagen siguiente
siguiente.addEventListener('click', () => {
    Navegacion('sig');
});