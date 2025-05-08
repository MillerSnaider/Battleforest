let ataqueJugador
let ataqueRival
let vidaJugador = 3
let vidaRival = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "none";
    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "none";

    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascota)
    
    let botonAtaqueFuego = document.getElementById("boton-fuego");
    botonAtaqueFuego.addEventListener("click", ataqueFuego)
    let botonAtaqueAgua = document.getElementById("boton-agua");
    botonAtaqueAgua.addEventListener("click", ataqueAgua) 
    let botonAtaquePlanta = document.getElementById("boton-planta");
    botonAtaquePlanta.addEventListener("click", ataquePlanta)

    let botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.addEventListener("click", reiniciarJuego)
} 
//Seleccionar mascota
function seleccionarMascota() {
    let inputGodzilla = document.getElementById("Godzilla");
    let inputCerberus = document.getElementById("Cerberus");
    let inputgriffin = document.getElementById("Griffin");
    let inputDraco = document.getElementById("Draco");
    let inputPhoenix = document.getElementById("Phoenix");
    let inputHydra = document.getElementById("Hydra");
    let spanMascotaJugador = document.getElementById("Mascota-jugador");

    if (inputGodzilla.checked) {
        spanMascotaJugador.innerHTML = "Godzilla";
    }
    else if (inputCerberus.checked) {
        spanMascotaJugador.innerHTML = "Cerberus";
    }
    else if (inputgriffin.checked) {
        spanMascotaJugador.innerHTML = "Griffin";
    }
    else if (inputDraco.checked) {
        spanMascotaJugador.innerHTML = "Draco"; }
    else if (inputPhoenix.checked) {
        spanMascotaJugador.innerHTML = "Phoenix"; }
    else if (inputHydra.checked) {
        spanMascotaJugador.innerHTML = "Hydra"; }
    else {
        alert("Selecciona una mascota");
        return;
    }

    // Solo se ejecuta si se seleccionó una mascota
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
    sectionSeleccionarMascota.style.display = "none";
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "block";

    seleccionarMascotaRival();
}

//Seleccionar mascota rival
function seleccionarMascotaRival() {
    let mascotaAleatoria = aleatorio(1,6);
    let spanMascotaRival = document.getElementById("Mascota-rival");

    if (mascotaAleatoria == 1) {
        spanMascotaRival.innerHTML = "Godzilla";
    }
    else if (mascotaAleatoria == 2) {
        spanMascotaRival.innerHTML = "Cerberus";
    }
    else if (mascotaAleatoria == 3) {
        spanMascotaRival.innerHTML = "Griffin";
    }
    else if (mascotaAleatoria == 4) {
        spanMascotaRival.innerHTML = "Draco";
    }
    else if (mascotaAleatoria == 5) {
        spanMascotaRival.innerHTML = "Phoenix";
    }
    else {
        spanMascotaRival.innerHTML = "Hydra";
    }
}
//Ataque jugador
function ataqueFuego() {
    ataqueJugador = "Fuego";
    ataqueAleatorioRival()
}
function ataqueAgua() {
    ataqueJugador = "Agua";
    ataqueAleatorioRival()
}
function ataquePlanta() {
    ataqueJugador = "Planta";
    ataqueAleatorioRival()
}
//Ataque rival
function ataqueAleatorioRival() {
    let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio == 1) {
        ataqueRival = "Fuego";
    }
    else if (ataqueAleatorio == 2) {
        ataqueRival = "Agua";
    }
    else {
        ataqueRival = "Planta";
    }
   combate()
}

// COMBATE
function combate() {
    let spanVidasJugador = document.getElementById("Vidas-jugador");
    let spanVidasRival = document.getElementById("Vidas-rival");
    if(ataqueRival == ataqueJugador) {
        resultado("EMPATE")
    } else if((ataqueJugador == "Fuego" && ataqueRival == "Planta") || (ataqueJugador == "Agua" && ataqueRival == "Fuego") || (ataqueJugador == "Planta" && ataqueRival == "Agua")) {
        resultado("GANASTE") 
        vidaRival--
        spanVidasRival.innerHTML = vidaRival
        } 
    else {
        resultado("PERDISTE")
        vidaJugador--
        spanVidasJugador.innerHTML = vidaJugador
        } 
        revisarVida()
}
//Revisar vida
function revisarVida() {
    if(vidaJugador == 0) {
       resultadoFinal("Perdiste, intenta de nuevo")
    } else if(vidaRival == 0) {
       resultadoFinal("Ganaste, felicidades")
    }
}
//Resultado
function resultado(resultadoBatalla) {
    let resultadoDeCombate = document.getElementById("resultado");
    let ataquesDelJugador = document.getElementById("ataques-del-jugador");
    let ataquesDelRival = document.getElementById("ataques-del-rival");

    let nuevoAtaqueDelJugador = document.createElement("p");
    let nuevoAtaqueDelRival = document.createElement("p");

    resultadoDeCombate.innerHTML = resultadoBatalla;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelRival.innerHTML = ataqueRival;
   
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelRival.appendChild(nuevoAtaqueDelRival)
}

function resultadoFinal(resultadoBatallaFinal) {
    let resultadoDeCombate = document.getElementById("resultado");

    resultadoDeCombate.innerHTML = resultadoBatallaFinal;



    let botonAtaqueFuego = document.getElementById("boton-fuego");
    botonAtaqueFuego.disabled = true;
    let botonAtaqueAgua = document.getElementById("boton-agua");
    botonAtaqueAgua.disabled = true;
    let botonAtaquePlanta = document.getElementById("boton-planta");
    botonAtaquePlanta.disabled = true;
    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.disabled = true;
   
    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "block";
}
//Reiniciar juego
function reiniciarJuego() {
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min )};

window.addEventListener("load", iniciarJuego)