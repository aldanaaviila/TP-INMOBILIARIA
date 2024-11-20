const d = document;

let arrayImagenes = [
    "images/propiedades/casa 1.jpg",
    "images/propiedades/casa 2.jpg",
    "images/propiedades/casa 3.jpg",
];

let imagenPrincipal = d.querySelector('#foto');
let anterior = d.querySelector('#anterior');
let siguiente = d.querySelector('#siguiente');
let galeriaImagenes = d.querySelectorAll('.slider-img img');

for (let img of galeriaImagenes) {
    img.addEventListener('click', (e) => {
        imagenPrincipal.src = e.target.src;
    });
}

let movimientoImgs = 1,
    posicionActual = 0,
    posicionInicial = 0,
    posicionFinal = arrayImagenes.length - 1; 

const Navegacion = (direccion) => {
    let sentido = direccion == 'ant' ? -1 : 1;
    posicionActual += movimientoImgs * sentido;

    if (posicionActual < posicionInicial) {
        posicionActual = posicionFinal; 
    }
    if (posicionActual > posicionFinal) {
        posicionActual = posicionInicial;  
    }

    galeriaImagenes.forEach((img, i) => {
        img.src = arrayImagenes[(i + posicionActual) % arrayImagenes.length];  
    });

    imagenPrincipal.src = galeriaImagenes[0].src;
};

anterior.addEventListener('click', () => {
    Navegacion('ant');
});

siguiente.addEventListener('click', () => {
    Navegacion('sig');
});
