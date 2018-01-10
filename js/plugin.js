$(document).ready(function() {
  // Begin of map
  $('#map_canvas').mapit({
    latitude:    40.4167754, // latitud Madrid
    longitude:   -3.7037901, // longitud Madrid
    zoom:        8,
    type:        'ROADMAP',
    scrollwheel: false,
    marker: {
      latitude:   40.4167754,/* Marcador por defecto */
      longitude:  -3.7037901,
      icon:       'img/marker_red.png',
      title:      'The Hotel',
      open:       false,
      center:     true
    },
    address: '<h2>The Hotel</h2><p>Address 1, Area - County<br />Athens 123 45, Greece</p><p>Tel.: +30 210 123 4567<br />Fax: +30 210 123 4567</p>',
    styles: 'GRAYSCALE',
    locations: [
      [37.999252, 23.733353, 'img/marker_blue.png', 'Cinema Aello 5+1', 'Panagi Tsaldari 140, Athina, Greece', false, '1'],
      [37.996547, 23.732001, 'img/marker_blue.png', 'Cinema Ilion', 'Τροίας 34, Αθήνα, Greece', false, '1'],
      [37.959408, 23.713982, 'img/marker_blue.png', 'Cinema Calipso', 'Megalou Alexandrou ke Kalipsous, Kallithea, Greece', false, '1'],
      [37.977563, 23.714041, 'img/marker_green.png', 'Technopolis', 'Πειραιώς 100, Αθήνα, Greece', false, '2'],
      [37.971436, 23.736695, 'img/marker_green.png', 'Zappeion', 'Greece', false, '2'],
      [37.975030, 23.747751, 'img/marker_green.png', 'Εθνική Πινακοθήκη Μουσείο Αλεξάνδρου Σούτζου', 'Μιχαλακοπούλου 1, Αθήνα, Greece', false, '2'],
      [37.976104, 23.7141811, 'img/marker_green.png', 'Benaki Museum', 'Koumpari 1, Athens, Greece', false, '2']
    ]
/*    origins: [
      ['37.936294', '23.947394'],
      ['37.975669', '23.733868']
    ] /*para rutas*/
  });
  // End of map

  // Begin of form validation

  // End of form validation

/*Animations*/
/*Menú hamburguesa*/
  $("#dropButton").click(function() {

    if ($("#dropContent").hasClass("display") == false)
      {
       $("#dropContent").addClass("display");
      }
    else if ($("#dropContent").hasClass ("display") == true) 
      {
       $("#dropContent").removeClass("display");
      }
  });

// Barra fija al hacer scroll
    $(window).scroll(function(){
    if ($(window).scrollTop() >= 72) { // El valor debe ser igual a la altura del header
       $("header").addClass("sticky");
       $(".header").addClass("sticky");
       $(".logo").removeClass("hide");
    }
    else {
       $("header").removeClass("sticky");
       $(".header").removeClass("sticky");
       $(".logo").addClass("hide");
    }
  });

  // Smooth scroll para los enlaces ancla
  $(".smooth").on('click mousewheel', function(event) {

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

});
