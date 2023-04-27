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

      



    /*---Contactos---*/

