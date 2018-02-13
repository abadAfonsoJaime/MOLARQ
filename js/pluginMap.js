$(document).ready(function() {

// Begin of map

// document.getElementById("Provincia").value = "default";
// document.getElementById("Cronologia").value = "default";

  $("#map_canvas").mapit({
    latitude:    40.4167754, /*coordenadas Madrid*/
    longitude:   1.482148, /*coordenadas Madrid*/
    zoom:        6,
    type:        "ROADMAP",
    scrollwheel: false,
    marker: {
      latitude:   39.52001,/* Marcador por defecto */
      longitude:  1.482148,
      icon:       "img/black_red.png",
      title:      "",
      open:       false,
      center:     true
    },
    address: "<h2>The Hotel</h2><p>Address 1, Area - County<br />Athens 123 45, Greece</p><p>Tel.: +30 210 123 4567<br />Fax: +30 210 123 4567</p>",
    styles: "GRAYSCALE",
    locations: [
      [39.920491, -2.804128, 'img/marker_blue.png', '', '<a href="site.html"><b>Segóbriga</b></a></br>Saelices, Cuenca', false, 'CUE'],
      [41.193839, 1.566456, 'img/marker_blue.png', '', '<b>Ciudadela ibérica</b></br>Calafell, Tarragona', false, 'TAR'],
      [42.1198504, 3.1227702, 'img/marker_blue.png', '', '<b>Ampurias</b></br>Rosas, Gerona', false, 'GER'],
      [36.902915, -4.113961, 'img/marker_red.png', '', '<b>Castillo de Zalia</b></br>Alcaucín, Málaga', false, '1'],
      [36.014321, -5.60445, 'img/marker_red.png', '', '<b>Baelo Claudia</b></br>Tarifa, Cádiz', false, '2'],
      [37.435211, -6.042773, 'img/marker_red.png', '', '<b>Itálica</b></br>Santiponce, Sevilla', false, '2']
    ]
/*    origins: [
      ['37.936294', '23.947394'],
      ['37.975669', '23.733868']
    ] /*para rutas*/
/*newMarker = [latit, longit, 'img/marker_green.png', longDescription, shortDescription, region, false, marcadorValue ]*/

/*    var botonInicioWorker = document.getElementById("workerButton");

    var myWorker;
    botonInicioWorker.addEventListener("click", inicioWorker);

    function inicioWorker(){
      //Comprobar que el navegador soporta Web Worker
      if (Worker){
        // Crear el Web Worker, pasando por parametro el JS secundario
        myWorker = new Worker("funcionP.js");
        myWorker.addEventListener("message",function(eventMarker)
          {
            locations.push(eventMarker.data);
          }
        )
      }
    }
    console.log(locations);
  })*/
});


  // Smooth scroll para los enlaces ancla
  $(".smooth").on("click", function(event) {

    // This.hash debe tener un valor antes de asociarle uno por defecto
    if (this.hash !== "") { // Lee el href del enlace que tenga la clase smooth (this) y lee la parte del link a partir de #
      // Sobrescribir la acción por defecto del enlace ancla
      event.preventDefault();

      var hash = this.hash;

      // Uso de jQuery animate para dar el efecto smooth al hacer clic
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){ // La duración del efecto en milisegundos
   
        // Añadir # a la URL del enlace cuando haces scroll (default)
        window.location.hash = hash;
      });
    } // End if
  });

// Select por filtrado
var inputField = document.querySelector('.chosen-value');
var dropdown = document.querySelector('.value-list');
var dropdownArray = [].concat(document.querySelectorAll('li'));
var dropdownItems = dropdownArray[0];
dropdown.classList.add('open');
 
var valueArray = [];
dropdownItems.forEach(function (item) {
  valueArray.push(item.textContent);
});
 
var closeDropdown = function closeDropdown() {
  dropdown.classList.remove('open');
};
 
inputField.addEventListener('input', function () {
  dropdown.classList.add('open');
  var inputValue = inputField.value.toLowerCase();
  var valueSubstring = undefined;
  if (inputValue.length > 0) {
    for (var j = 0; j < valueArray.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownItems[j].classList.add('closed');
      } else {
        dropdownItems[j].classList.remove('closed');
      }
    }
  } else {
    for (var i = 0; i < dropdownItems.length; i++) {
      dropdownItems[i].classList.remove('closed');
    }
  }
});
 
dropdownItems.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    inputField.value = item.textContent;
    dropdownItems.forEach(function (dropdown) {
      dropdown.classList.add('closed');
    });
  });
});
 
inputField.addEventListener('focus', function () {
  inputField.placeholder = 'Elige';
  dropdown.classList.add('open');
  dropdownItems.forEach(function (dropdown) {
    dropdown.classList.remove('closed');
  });
});
 
// inputField.addEventListener('blur', function () {
//   inputField.placeholder = 'Haz clic';
//   dropdown.classList.remove('open');
// });
 
document.addEventListener('click', function (evt) {
  var isDropdown = dropdown.contains(evt.target);
  var isInput = inputField.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown.classList.remove('open');
  }
});

}); /*End of document.ready*/