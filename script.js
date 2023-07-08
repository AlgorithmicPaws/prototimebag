document.addEventListener('DOMContentLoaded', function() {
  var tiempoPlanificadoInput = document.getElementById('tiempoPlanificado');
  var bolsaTiempoInput = document.getElementById('bolsaTiempo');
  var startButton = document.getElementById('startButton');
  var contadorValue = document.getElementById('contadorValue');
  var bolsaTiempoValue = document.getElementById('bolsaTiempoValue');
  var timerInterval;

  startButton.addEventListener('click', function() {
    var tiempoPlanificado = tiempoPlanificadoInput.value;
    var bolsaTiempo = bolsaTiempoInput.value;

    var tiempoPlanificadoSegundos = convertirTiempoASegundos(tiempoPlanificado);
    var bolsaTiempoSegundos = convertirTiempoASegundos(bolsaTiempo);

    contadorValue.textContent = convertirSegundosATiempo(tiempoPlanificadoSegundos);
    bolsaTiempoValue.textContent = convertirSegundosATiempo(bolsaTiempoSegundos);

    timerInterval = setInterval(function() {
      tiempoPlanificadoSegundos--;
      bolsaTiempoSegundos--;

      contadorValue.textContent = convertirSegundosATiempo(tiempoPlanificadoSegundos);
      bolsaTiempoValue.textContent = convertirSegundosATiempo(bolsaTiempoSegundos);

      if (tiempoPlanificadoSegundos <= 0) {
        clearInterval(timerInterval);
        alert('¡Tiempo planificado agotado!');
      }
    }, 1000);

  });

  function convertirTiempoASegundos(tiempo) {
    var partesTiempo = tiempo.split(':');
    var horas = parseInt(partesTiempo[0], 10);
    var minutos = parseInt(partesTiempo[1], 10);
    var segundos = parseInt(partesTiempo[2], 10);
    var totalSegundos = (horas * 3600) + (minutos * 60) + segundos;
    return totalSegundos;
  }

  function convertirSegundosATiempo(segundos) {
    var horas = Math.floor(segundos / 3600);
    var minutos = Math.floor((segundos % 3600) / 60);
    var segundosRestantes = segundos % 60;

    var tiempo = horas.toString().padStart(2, '0') + ':' +
                 minutos.toString().padStart(2, '0') + ':' +
                 segundosRestantes.toString().padStart(2, '0');

    return tiempo;
  }

});
