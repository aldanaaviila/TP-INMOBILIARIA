// creamos la constante para el form y el botón de envío
const form = document.querySelector('.formulario');
const button = document.getElementById('botonEnviar');

// Evento de envío del formulario
form.addEventListener('submit', function(event) {

    console.log("Formulario enviado");
    
    // creacion de constantes de los valores de los campos del form
    const nombre = document.getElementById('nombre').value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // creamos una condicion para verificar que todos los campos estén completos
    if (nombre && celular && email && mensaje) {
        // en caso de que se cumpla, se le da el mensaje al usuario
        alert('Tu consulta fue enviada! Gracias y te responderemos a la brevedad');
    } else {
        // caso contrario, se le da otro mensaje de alerta
        alert('Algunos campos están incompletos!');
    }
});
