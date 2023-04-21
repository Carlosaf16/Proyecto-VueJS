/* ESTO ESTA EN JS BASICO LO TENGO QUE PASAR A VUEJS */
const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      botonBuscar = body.querySelector(".buscador"),
      modoSwitch = body.querySelector(".toggle-switch"),
      modoTexto = body.querySelector(".texto-modo");
      
      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("cerrar");
      });

      modoSwitch.addEventListener("click", () =>{
        body.classList.toggle("oscuro");

        if(body.classList.contains("oscuro")){
          modoTexto.innerText = "Modo Claro";
        }
        else{
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

