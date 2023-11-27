const actualizarReloj = () => {
  const fechaHora = new Date();
  const diaSemanaTexto = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const diaSemana = fechaHora.getDay();
  const dia = fechaHora.getDate();
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const mes = fechaHora.getMonth();
  const year = fechaHora.getFullYear();

  const hora = fechaHora.getHours();
  const minutos = fechaHora.getMinutes();
  const segundos = fechaHora.getSeconds();

  const ampm = hora >= 12 ? 'PM' : 'AM';
  const horaFormato12 = hora % 12 || 12;

  document.getElementById('diaSemana').innerHTML = diaSemanaTexto[diaSemana] + "&nbsp;";
  document.getElementById('dia').innerHTML = dia + "&nbsp;";;
  document.getElementById('mes').innerHTML = meses[mes] + "&nbsp;";
  document.getElementById('year').innerHTML = year;
  document.getElementById('de').innerHTML = "de&nbsp;"; 
  document.getElementById('del').innerHTML = "del&nbsp;"; 
  document.getElementById('horaActual').innerHTML = horaFormato12;
  document.getElementById('minuto').innerHTML = minutos < 10 ? `0${minutos}` : minutos;
  document.getElementById('segundo').innerHTML = segundos < 10 ? `0${segundos}` : segundos + "&nbsp;";;
  document.getElementById('ampm').innerHTML = ampm;
};

setInterval(actualizarReloj, 1000);
actualizarReloj();