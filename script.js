/* ESTO ESTA EN JS BASICO LO TENGO QUE PASAR A VUEJS */

const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const botonBuscar = body.querySelector(".buscador");
const modoSwitch = body.querySelector(".toggle-switch");
const modoTexto = body.querySelector(".texto-modo");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("cerrar");
});

modoSwitch.addEventListener("click", () => {
  body.classList.toggle("oscuro");

  if (body.classList.contains("oscuro")) {
    modoTexto.innerText = "Modo Claro";
    document.querySelectorAll("*").forEach(element => element.classList.add("oscuro"));
  }
  else {
    modoTexto.innerHTML = "Modo<br>Oscuro";
    document.querySelectorAll("*").forEach(element => element.classList.remove("oscuro"));
  }

  // Guardar el estado del switch en el almacenamiento local
  localStorage.setItem("modoOscuro", body.classList.contains("oscuro"));
});

// Verificar el estado del switch almacenado en el almacenamiento local
window.addEventListener("load", () => {
  const modoOscuro = localStorage.getItem("modoOscuro");

  if (modoOscuro) {
    body.classList.add("oscuro");
    modoTexto.innerText = "Modo Claro";
    document.querySelectorAll("*").forEach(element => element.classList.add("oscuro"));
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
const result = document.querySelector('.result');
const form = document.querySelector('.get-weather');
const nameCity = document.querySelector('#city');
const nameCountry = document.querySelector('#country');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameCity.value === '' || nameCountry.value === '') {
        showError('Ambos campos son obligatorios...');
        return;
    }

    callAPI(nameCity.value, nameCountry.value);
    //console.log(nameCity.value);
    //console.log(nameCountry.value);
})

function callAPI(city, country){
    const apiId = '41d1d7f5c2475b3a16167b30bc4f265c';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(dataJSON => {
            if (dataJSON.cod === '404') {
                showError('Ciudad no encontrada...');
            } else {
                clearHTML();
                showWeather(dataJSON);
            }
            //console.log(dataJSON);
        })
        .catch(error => {
            console.log(error);
        })
}

function showWeather(data){
    const {name, main:{temp, temp_min, temp_max}, weather:[arr]} = data;

    const degrees = kelvinToCentigrade(temp);
    const min = kelvinToCentigrade(temp_min);
    const max = kelvinToCentigrade(temp_max);

    const content = document.createElement('div');
    content.innerHTML = `
        <h5>Clima en ${name}</h5>
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
        <h2>${degrees}°C</h2>
        <p>Max: ${max}°C</p>
        <p>Min: ${min}°C</p>
    `;

    result.appendChild(content);

}

function showError(message){
    //console.log(message);
    const alert = document.createElement('p');
    alert.classList.add('alert-message');
    alert.innerHTML = message;

    form.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

function kelvinToCentigrade(temp){
    return parseInt(temp - 273.15);
}

function clearHTML(){
    result.innerHTML = '';
}

// Esta sección se utiliza para agregar interactividad al chat
// mediante el uso de JavaScript. Sin embargo, como se mencionó
// al principio, este ejemplo no incluye funcionalidad real.

// Selección de elementos del DOM
const chatForm = document.querySelector('.chat-form');
const chatInput = document.querySelector('.chat-input');
const chatMessages = document.querySelector('.chat-messages');

// Función para agregar un mensaje al chat
function addMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p>${message}</p>`;
  chatMessages.appendChild(div);
}

// Escucha del envío del formulario
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = chatInput.value;
  addMessage(message);
  chatInput.value = '';
});


//BOTON SUBIR
document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp() {

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll >= 3) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 2));

    }
}
buttonUp = document.getElementById("button-up");
window.onscroll = function () {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 150) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 150) {
        buttonUp.style.transform = "scale(0)";
    }

};

