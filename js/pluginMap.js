$(document).ready(function() {

// Begin of map

document.getElementById("Provincia").value = "default";
document.getElementById("Cronologia").value = "default";

  $('#map_canvas').mapit({
    latitude:    40.4167754, /*coordenadas Madrid*/
    longitude:   1.482148, /*coordenadas Madrid*/
    zoom:        6,
    type:        'ROADMAP',
    scrollwheel: false,
    marker: {
      latitude:   39.52001,/* Marcador por defecto */
      longitude:  1.482148,
      icon:       'img/black_red.png',
      title:      '',
      open:       false,
      center:     true
    },
    address: '<h2>The Hotel</h2><p>Address 1, Area - County<br />Athens 123 45, Greece</p><p>Tel.: +30 210 123 4567<br />Fax: +30 210 123 4567</p>',
    styles: 'GRAYSCALE',
    locations: [
      [39.920491, -2.804128, 'img/marker_blue.png', 'Parque arqueológico', '<a href="site.html">Saelices, Cuenca</a>', false, 'CUE'],
      [41.193839, 1.566456, 'img/marker_blue.png', 'Ciudadela Ibérica', 'Calafell, Tarragona', false, 'TAR'],
      [42.1198504, 3.1227702, 'img/marker_blue.png', 'Ampurias', 'La Escala (Gerona)', false, 'GER'],
      [36.902915, -4.113961, 'img/marker_green.png', 'Castillo de Zalia', 'Alcaucin, Málaga', false, '1'],
      [36.014321, -5.60445, 'img/marker_green.png', 'Basílica de Baelo Claudia', 'Tarifa, Cádiz', false, '2'],
      [37.435211, -6.042773, 'img/marker_green.png', 'Benaki Museum', 'Koumpari 1, Athens, Greece', false, '2']
    ]
/*    origins: [
      ['37.936294', '23.947394'],
      ['37.975669', '23.733868']
    ] /*para rutas*/
  });


  // Smooth scroll para los enlaces ancla
  $(".smooth").on('click', function(event) {

    // This.hash debe tener un valor antes de asociarle uno por defecto
    if (this.hash !== "") { // Lee el href del enlace que tenga la clase smooth (this) y lee la parte del link a partir de #
      // Sobrescribir la acción por defecto del enlace ancla
      event.preventDefault();

      var hash = this.hash;

      // Uso de jQuery animate para dar el efecto smooth al hacer clic
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){ // La duración del efecto en milisegundos
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

}); /*End of document.ready*/