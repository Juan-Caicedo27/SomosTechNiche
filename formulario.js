// Obtiene los elementos del DOM por su id
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const comentario = document.getElementById('comentario');
const form = document.getElementById('form');
const parrafo = document.getElementById("warnings");

// Añade un evento al formulario para manejar el envío
form.addEventListener("submit", e => {
    e.preventDefault(); // Evita el envío del formulario para manejar la validación
    let warnings = ""; // Donde se guardan las advertencias
    let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/; // Validar el correo electrónico
    let entrar = false; // Variable para determinar  errores 

    //  longitud del nombre
    if (nombre.value.length < 2) {
        warnings += "El nombre es muy corto\n"; // Añade advertencia si el nombre es demasiado corto
        entrar = true; // Indica  un error
    }

    // Verifica el formato del correo electrónico
    if (!regexEmail.test(correo.value)) {
        warnings += "El correo no es válido\n"; // Añade advertencia si el correo no cumple con el formato
        entrar = true; // Indica  un error
    }

    // Verifica que el campo de comentario no esté vacío
    if (comentario.value.trim() === "") {
        warnings += "El comentario no puede estar vacío\n"; // Añade advertencia si el comentario está vacío
        entrar = true; // Indica   un error
    }

    // Muestra advertencias si hubo errores, de lo contrario, envía el formulario
    if (entrar) {
        alert(warnings); // Muestra la advertencia en un alert
    } else {
        alert("Formulario enviado correctamente\n"); //   mensaje de éxito
    }
});
