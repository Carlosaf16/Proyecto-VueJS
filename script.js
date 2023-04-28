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



/***********************************************************************************************************************************************************************/



/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 40.4165000, lng: -3.7025600 },
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const beaches = [
  ["Bondi Beach", 40.81192501907901, -3.765919890087668, 1],
  
];

function setMarkers(map) {
  // Adds markers to the map.
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  const image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];

    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });
  }
}

window.initMap = initMap;
