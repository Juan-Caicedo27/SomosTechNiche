const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const comentario = document.getElementById('comentario');
const form = document.getElementById('form');
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = ""; // donde se guardan las advertencias
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;// expresiones para validar correo
    let entrar = false; // variable pra determinar la existencia de errores 

    // verifica  nombre
    if (nombre.value.length < 6) {
        warnings += `El nombre es muy corto\n`;
        entrar = true; // dice la existencia del error 
    }

    // verifica del correo
    if (!regexEmail.test(correo.value)) {
        warnings += `El correo no es válido\n`;
        entrar = true;
    }

    // Vverificacion de  comentario
    if (comentario.value.trim() === "") {
        warnings += `El comentario no puede estar vacío\n`;
        entrar = true;
    }

    // Muestra advertencia
    if (entrar) {
        alert(warnings);  // Muestra la advertencia en una alerta
    } else {
        alert("Formulario enviado correctamente\n");
    }
});
