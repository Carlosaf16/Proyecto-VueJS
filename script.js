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

        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }

        document.getElementById(cityName).style.display = "block";
        elmnt.style.backgroundColor = color;
      }

      document.getElementById("defaultOpen").click();



/***********************************************************************************************************************************************************************/
function refrescarPagina(){
  window.location.reload();
} 