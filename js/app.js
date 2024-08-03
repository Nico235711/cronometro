const cronometro = document.getElementById('cronometro')
const botonIniciarPausar = document.querySelector(".iniciar-pausar")
const imagenIniciarPausar = document.querySelector(".iniciar-pausar img")

const botonReiniciar = document.querySelector(".reiniciar")


const SEGUNDOS_MAX = 60
const MINUTOS_MAX = 60

let intervalo
let corriendo = false
let segundos = 0
let minutos = 0
let horas = 0

botonIniciarPausar.addEventListener("click", () => {
  if (corriendo) pausarCronometro()
  else {
    iniciarCronometro()
    cambiarBotonIniciar()
  }
})

botonReiniciar.addEventListener("click", reiniciarCronometro)

function asignarFormato(unidadTiempo) {
  return unidadTiempo < 10 ? "0" + unidadTiempo : unidadTiempo
}

function pausarCronometro() {
  clearInterval(intervalo)
  corriendo = false
  imagenIniciarPausar.src = "img/player-play.svg"
  botonIniciarPausar.style.backgroundColor = "#0f0"
}

function cambiarBotonIniciar() {
  imagenIniciarPausar.src = "img/player-pause.svg"
  botonIniciarPausar.style.backgroundColor = "#ff0"
}

function iniciarCronometro() {
  corriendo = true
  // para pausar necesito setear una variable que me almacene el intervalo
  intervalo = setInterval(() => {
    segundos++
    if (segundos === SEGUNDOS_MAX) {
      segundos = 0
      minutos++
      if (minutos === MINUTOS_MAX) {
        minutos = 0
        horas++
      }
    }
    segundosFormateado = asignarFormato(segundos)
    minutosFormateado = asignarFormato(minutos)
    horaFormateada = asignarFormato(horas)
    cronometro.textContent = `${horaFormateada}:${minutosFormateado}:${segundosFormateado}`
  }, 1000);
}

function reiniciarCronometro() {
  clearInterval(intervalo)
  imagenIniciarPausar.src = "img/player-play.svg"
  botonIniciarPausar.style.backgroundColor = "#0f0"
  corriendo = false
  segundos = 0
  minutos = 0
  horas = 0
  segundosFormateado = asignarFormato(segundos)
  minutosFormateado = asignarFormato(minutos)
  horaFormateada = asignarFormato(horas)
  cronometro.textContent = `${horaFormateada}:${minutosFormateado}:${segundosFormateado}`
}