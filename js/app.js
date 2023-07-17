// Función para generar una jugada aleatoria del computador
function generarJugadaComputador() {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones[indiceAleatorio];
  }
  
  // Función para jugar piedra, papel o tijeras
  function jugar(callback) {
    const jugadaUsuario = prompt('Elige una jugada (piedra, papel o tijeras):');
    const jugadaComputador = generarJugadaComputador();
  
    callback(jugadaUsuario, jugadaComputador);
  }
  
  // Función de devolución de llamada para determinar el ganador
  function determinarGanador(jugadaUsuario, jugadaComputador) {
    if (jugadaUsuario === jugadaComputador) {
      console.log('Empate');
    } else if (
      (jugadaUsuario === 'piedra' && jugadaComputador === 'tijeras') ||
      (jugadaUsuario === 'papel' && jugadaComputador === 'piedra') ||
      (jugadaUsuario === 'tijeras' && jugadaComputador === 'papel')
    ) {
      console.log('¡Ganaste!');
    } else {
      console.log('Perdiste. Intenta de nuevo.');
    }
  }
  
  // Jugar el juego llamando a la función "jugar" con la devolución de llamada "determinarGanador"
  jugar(determinarGanador);