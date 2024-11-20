 // Función que actualiza la hora  
function updateTime() {
    
    const timeElement = document.getElementById('time');

    // nuevo objeto de fecha con   hora actual
    const now = new Date();

    // Obtiene las horas, minutos y segundos del objeto Date
    const hours = String(now.getHours()).padStart(2, '0');   // Asegura que las horas tengan dos dígitos
    const minutes = String(now.getMinutes()).padStart(2, '0'); //   minutos tengan dos dígitos
    const seconds = String(now.getSeconds()).padStart(2, '0'); //  segundos tengan dos dígitos

    // Actualiza el contenido del elemento 'time' 
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

//   cada segundo (1000 milisegundos)
setInterval(updateTime, 1000);

// mostrar la hora al cargar la página
updateTime();
