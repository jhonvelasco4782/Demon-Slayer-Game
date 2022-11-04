let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  //funcion para esconder los botones antes de escoger todo

  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "none";

  let SectionReiniciar = document.getElementById("reiniciar");
  SectionReiniciar.style.display = "none";

  let botonPersonajeJugador = document.getElementById("boton-personaje");
  botonPersonajeJugador.addEventListener("click", selecionaPersonajeJugador);

  //funciones para elegir los atques al precionar los botones

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
  let botonDragon = document.getElementById("boton-dragon");
  botonDragon.addEventListener("click", ataqueDragon);
  let botonTormenta = document.getElementById("boton-tormenta");
  botonTormenta.addEventListener("click", ataqueTormenta);
  let botonFantasma = document.getElementById("boton-fantasma");
  botonFantasma.addEventListener("click", ataqueFantasma);

  let botonReiniciar = document.getElementById("boton-reiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

// llamados a las variables que se crearon anteriormente

function selecionaPersonajeJugador() {

  //esconder la parte de seleccion de personajes

  let sectionSeleccionarPersonaje = document.getElementById(
    "seleccionar-personaje"
  );
  sectionSeleccionarPersonaje.style.display = "none";

  //con esta funcion aparece los botones para los ataques despues de elegir al personaje

  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "flex";

  let inputTanjiro = document.getElementById("Tanjiro");
  let inputNezuko = document.getElementById("Nezuko");
  let inputZenitsu = document.getElementById("Zenitsu");
  let inputInosuke = document.getElementById("Inosuke");
  let inputKyojuro = document.getElementById("Kyojuro");
  let inputGiyu = document.getElementById("Giyu");
  let spanPersonajeJugador = document.getElementById("personaje-jugador");

  if (inputTanjiro.checked) {
    spanPersonajeJugador.innerHTML = "Tanjiro";
  } else if (inputNezuko.checked) {
    spanPersonajeJugador.innerHTML = "Nezuko";
  } else if (inputZenitsu.checked) {
    spanPersonajeJugador.innerHTML = "Zenitsu";
  } else if (inputInosuke.checked) {
    spanPersonajeJugador.innerHTML = "Inosuke";
  } else if (inputKyojuro.checked) {
    spanPersonajeJugador.innerHTML = "Kyojuro";
  } else if (inputGiyu.checked) {
    spanPersonajeJugador.innerHTML = "Giyu";
  } else {
    alert("selecciona tu personaje");
  }

  seleccionarPersonajeEnemigo();
}

// funcion para crear las personajes enemigos aleatorios

function seleccionarPersonajeEnemigo() {
  // una vez se escoge el personaje e inicia la batalla ocultamos

  let personajeAleatorio = aleatorio(1, 6);
  let spanPersonajeEnemigo = document.getElementById("personaje-enemigo");

  if (personajeAleatorio == 1) {
    spanPersonajeEnemigo.innerHTML = "Tanjiro";
  } else if (personajeAleatorio == 2) {
    spanPersonajeEnemigo.innerHTML = "Nezuko";
  } else if (personajeAleatorio == 3) {
    spanPersonajeEnemigo.innerHTML = "Zenitsu";
  } else if (personajeAleatorio == 4) {
    spanPersonajeEnemigo.innerHTML = "Inosuke";
  } else if (personajeAleatorio == 5) {
    spanPersonajeEnemigo.innerHTML = "Kyojuro";
  } else {
    spanPersonajeEnemigo.innerHTML = "Giyu"
  }
}

// funciones para los ataques que se crearon

function ataqueFuego() {
  ataqueJugador = "Fuego";
  ataqueAleatorioEnemigo();
}
function ataqueAgua() {
  ataqueJugador = "Agua";
  ataqueAleatorioEnemigo();
}
function ataqueTierra() {
  ataqueJugador = "Tierra";
  ataqueAleatorioEnemigo();
}
function ataqueDragon() {
  ataqueJugador = "Dragon";
  ataqueAleatorioEnemigo();
}
function ataqueTormenta() {
  ataqueJugador = "Tormenta";
  ataqueAleatorioEnemigo();
}
function ataqueFantasma() {
  ataqueJugador = "Fantasma";
  ataqueAleatorioEnemigo();
}

let resultado;

// funciones creadas para elegir ataques aleatorios

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 6);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "Fuego";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "Agua";
  } else if (ataqueAleatorio == 3) {
    ataqueEnemigo = "Tierra";
  } else if (ataqueAleatorio == 4) {
    ataqueEnemigo = "Dragon";
  } else if (ataqueAleatorio == 5) {
    ataqueEnemigo = "Tormenta";
  } else {
    ataqueEnemigo = "Fantasma";
  }

  combate();
}

// ataques de los enemigos y usuarios

function combate() {
  //se hacen los llamados del contador para las vidas
  let spanvidasJugador = document.getElementById("vidas-jugador");
  let spanvidasEnemigo = document.getElementById("vidas-enemigo");
  // empates que se pueden generar

  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("Empate 😛😛😛");
  } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Dragon") {
    crearMensaje("Empate 😛😛😛");
  } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Tormenta") {
    crearMensaje("Empate 😛😛😛");
  } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Fantasma") {
    crearMensaje("Empate 😛😛😛");
  } else if (ataqueJugador == "Dragon" && ataqueEnemigo == "Fuego") {
    crearMensaje("Empate 😛😛😛");
  } else if (ataqueJugador == "Tormenta" && ataqueEnemigo == "Agua") {
    crearMensaje("Empate 😛😛😛");
  } else if (ataqueJugador == "Fantasma" && ataqueEnemigo == "Tierra") {
    crearMensaje("Empate 😛😛😛");

    //victorias por parte del jugador
  } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
    crearMensaje("Ganaste 💎💎💎 ");
    vidasEnemigo--;
    spanvidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tormenta") {
    crearMensaje("Ganaste 💎💎💎 ");
    vidasEnemigo--;
    spanvidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
    crearMensaje("Ganaste 💎💎💎");
    vidasEnemigo--;
    spanvidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Dragon") {
    crearMensaje("Ganaste 💎💎💎");
    vidasEnemigo--;
    spanvidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
    crearMensaje("Ganaste 💎💎💎");
    vidasEnemigo--;
    spanvidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Fantasma") {
    crearMensaje("Ganaste 💎💎💎");
    vidasEnemigo--;
    spanvidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Dragon" && ataqueEnemigo == "Tormenta") {
    crearMensaje("Ganaste 💎💎💎");
    vidasEnemigo--;
    spanvidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Dragon" && ataqueEnemigo == "Tierra") {
    crearMensaje("Ganaste 💎💎💎");
    vidasEnemigo--;
    spanvidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Tormenta" && ataqueEnemigo == "Fantasma") {
    crearMensaje("Ganaste 💎💎💎");
    vidasEnemigo--;
    spanvidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Tormenta" && ataqueEnemigo == "Fuego") {
    crearMensaje("Ganaste 💎💎💎");
    vidasEnemigo--;
    spanvidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Fantasma" && ataqueEnemigo == "Dragon") {
    crearMensaje("Ganaste 💎💎💎");
    vidasEnemigo--;
    spanvidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Fantasma" && ataqueEnemigo == "Agua") {
    crearMensaje("Ganaste 💎💎💎");
    vidasEnemigo--;
    spanvidasEnemigo.innerHTML = vidasEnemigo;
  }
  //derrotas por parte del jugador
  else {
    crearMensaje("Perdidste 😭😭😭");
    vidasJugador--;
    spanvidasJugador.innerHTML = vidasJugador;
  }
  // se revizan las vidas de los jugadores
  revisarVidas();
}
// mensaje del llamado resultado final
function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("FELICIDADES HAZ VENCIDO 🎉🎉🎈🎈💰🎈🎈🎉🎉 ");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("LO SIENTO HAZ PERDIDO INTENTA DE NUEVO 💔💔😭😭😭💔💔 ");
  }
}

// funcion para los mensajes de ataques aleatorios de los enemigos

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu personaje atacó con " +
    ataqueJugador +
    ", El personaje del enemigo atacó con " +
    ataqueEnemigo +
    "- " +
    resultado;

  sectionMensajes.appendChild(parrafo);
}

// mensajes de victoria o derrota sugun el juego

function crearMensajeFinal(resultadoBatalla) {
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoBatalla;
  sectionMensajes.appendChild(parrafo);

  // se llama la funcion disable para que dejen de atacar
  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;
  let botonDragon = document.getElementById("boton-dragon");
  botonDragon.disabled = true;
  let botonTormenta = document.getElementById("boton-tormenta");
  botonTormenta.disabled = true;
  let botonFantasma = document.getElementById("boton-fantasma");
  botonFantasma.disabled = true;

  let SectionReiniciar = document.getElementById("reiniciar");
  SectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
