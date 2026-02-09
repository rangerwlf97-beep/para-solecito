// 1. FUNCION PARA VALIDAR LA RESPUESTA INICIAL
function verificarRespuesta() {
    // La respuesta que definiste
    const respuestaCorrecta = "Amigos? No."; 
    
    // Obtenemos el valor del input, quitamos espacios extra y pasamos a minúsculas para comparar
    const respuestaUsuario = document.getElementById("respuesta-filtro").value.trim();

    // Comparamos de forma "insensible" a mayúsculas/minúsculas para que no falle por eso
    if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        // Transición: Ocultamos una pantalla y mostramos la otra
        document.getElementById("pantalla-filtro").style.display = "none";
        document.getElementById("pantalla-propuesta").style.display = "block";
    } else {
        // Error: Si se equivoca, lanzamos una alerta
        alert("¡Esa no es la respuesta! Intenta de nuevo, recuerda los signos y espacios.");
    }
}

// 2. LOGICA PARA EL BOTON "NO" QUE HUYE
const btnNo = document.querySelector("#btn-no");

const moverBoton = () => {
    // Calculamos el ancho y alto disponible en la pantalla del dispositivo
    // Restamos el tamaño del botón para que no se salga de los bordes
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);

    // Aplicamos las coordenadas
    btnNo.style.position = "absolute";
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
};

// Evento para computadoras (al pasar el mouse)
btnNo.addEventListener("mouseenter", moverBoton);

// Evento para celulares (al intentar tocarlo)
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Evita que el navegador haga scroll o zoom al tocar rápido
    moverBoton();
});

// 3. LOGICA PARA EL BOTON "SI"
const btnSi = document.querySelector("#btn-si");

btnSi.addEventListener("click", () => {
    // Aquí puedes cambiar el mensaje por algo más personal
    alert("¡SABÍA QUE DIRÍAS QUE SÍ! ❤️ Eres lo mejor que me ha pasado.");
    
    // Opcional: Redirigir a un video de YouTube o a vuestro chat de WhatsApp tras el clic
    // window.location.href = "https://wa.me/tu-numero-aqui";
});