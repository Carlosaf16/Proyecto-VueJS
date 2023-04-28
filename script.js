/* ESTO ESTA EN JS BASICO LO TENGO QUE PASAR A VUEJS */
const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  botonBuscar = body.querySelector(".buscador"),
  modoSwitch = body.querySelector(".toggle-switch"),
  modoTexto = body.querySelector(".texto-modo");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("cerrar");
});

modoSwitch.addEventListener("click", () => {
  body.classList.toggle("oscuro");

  if (body.classList.contains("oscuro")) {
    modoTexto.innerText = "Modo Claro";
  }
  else {
    modoTexto.innerHTML = "Modo<br>Oscuro";
  }
});

function openCity(cityName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(cityName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//TIEMPOOOOOOOO

const tarjeta = document.querySelector('.tarjeta');
const buscadorTiempo = document.querySelector('.buscador-tiempo button');
const cajaTiempo = document.querySelector('.caja-tiempo');
const detallesTiempo = document.querySelector('.weather-details');
const error404 = document.querySelector('.no-encontrado');

search.addEventListener('click', () => {

  const APIKey = '728b0ee6df5687559812bd3169ad77b7';
  const ciudad = document.querySelector('.buscador-tiempo input').value;

  if (ciudad === '')
    return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {

      if (json.cod === '404') {
        tarjeta.style.height = '400px';
        cajaTiempo.style.display = 'none';
        detallesTiempo.style.display = 'none';
        error404.style.display = 'block';
        error404.classList.add('fadeIn');
        return;
      }

      error404.style.display = 'none';
      error404.classList.remove('fadeIn');

      const imagen = document.querySelector('.caja-tiempo img');
      const temperatura = document.querySelector('.caja-tiempo .temperatura');
      const descripcion = document.querySelector('.caja-tiempo .descripcion');
      const humedad = document.querySelector('.weather-details .humedad span');
      const viento = document.querySelector('.weather-details .viento span');

      switch (json.weather[0].main) {
        case 'Clear':
          image.src = 'images/clear.png';
          break;

        case 'Rain':
          image.src = 'images/rain.png';
          break;

        case 'Snow':
          image.src = 'images/snow.png';
          break;

        case 'Clouds':
          image.src = 'images/cloud.png';
          break;

        case 'Haze':
          image.src = 'images/mist.png';
          break;

        default:
          image.src = '';
      }

      temperatura.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      descripcion.innerHTML = `${json.weather[0].descripcion}`;
      humedad.innerHTML = `${json.main.humedad}%`;
      viento.innerHTML = `${parseInt(json.viento.speed)}Km/h`;

      cajaTiempo.style.display = '';
      detallesTiempo.style.display = '';
      cajaTiempo.classList.add('fadeIn');
      detallesTiempo.classList.add('fadeIn');
      tarjeta.style.height = '590px';
    });
});
