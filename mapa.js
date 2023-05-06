window.initMap = initMap;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8.5,
    center: { lat: 40.53815385953011,  lng: -4.507365836580444 },
  });

  setMarkers(map);
}

const beaches = [
  ["Puerto Peña Negra", 40.498446136707635, -5.230275072328321, "fotoMap1"],
  ["Moralzarzal", 40.67700417308894, -3.966123566323908, "fotoMap2"],
  ["Puerto de Mijares", 40.3321064947298, -4.814338659564157, "fotoMap3"],
  ["Puerto de Navacerrada y Cotos", 40.78924530285741, -4.003439485018411, "fotoMap4"],
  ["Puerto de Morcuera Navacerrada", 40.82857954361304, -3.831931425289613, "fotoMap5"],
  ["Alto de Abantos", 40.61646570918979, -4.175504094319652, "fotoMap6"],
  ["Plataforma de Gredos", 40.27768598212523, -5.231662390161408, "fotoMap7"],
];

function setMarkers(map) {
  const image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];

    const marker = new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: i + 1,
    });

    // Agrega un evento de clic al marcador
    marker.addListener("click", () => {
      // Selecciona el div #fotoMap correspondiente
      const targetElement = document.getElementById(beach[3]);

      // Hace scroll hasta el div #fotoMap
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  }
}

window.initMap = initMap;


document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp() {

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll >= 3) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 12));

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
