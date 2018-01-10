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
      [39.920491, -2.804128, 'img/marker_blue.png', 'Parque arqueológico', 'Saelices, Cuenca', false, 'CUE'],
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


// Begin of form validation
var formulario = document.getElementById("myForm");
window.onload = iniciar;

function iniciar(){
    document.getElementById("submit1").addEventListener('click', validar , false)
}
//VALIDACION NOMBRE Y APELLIDOS
function validaNombre(){
    var elemento = document.getElementById("username");
    if (elemento.value ==""){
        alert("Nombre y apellidos Obligatorio");
        return false;
    }
    return true;
}


// VALIDACION EMAIL
function validaEmail(){
    var elemento = document.getElementById("usermail");
    if (elemento.value ==""){
        alert("Email Obligatorio");
        return false;
    }
    return true;
}


//CONTRASEÑA y REPETIR CONTRASEÑA




function comprobarClave(){ 
   /* var p1 = document.myForm.userpass.value 
    var p2 = document.myForm.userpass2.value */

    var p1 = document.getElementById("userpass").value;
    var p2 = document.getElementById("userpass2").value;

    if (p1 == p2) 
        alert("Las dos claves son iguales...\nRealizaríamos las acciones del caso positivo") 
    else 
        alert("Las dos claves son distintas...\nRealizaríamos las acciones del caso negativo") 
} 












/*function validaContrasena(){
    var elemento = document.getElementById("userpass");
    if (isNaN(elemento.value =="" )){
        alert("Contraseña Obligatoria solo con valor numéricos");
        return false;
    }
    return true;
}

//REPITA CONTRASEÑA
function validaContrasena2(){
    var elemento = document.getElementById("userpass2");
    if (elemento.value ==""){
        alert("");
        return false;
    }
    return true;
}*/

//FECHA NACIMIENTO
function validaBday(){
    var elemento = document.getElementById("userbdate");

    if (elemento.value ==""){
        alert("Introduzca una fecha");
        return false;
    }
    return true;
}



function validar (e){
    if ( validaNombre() && validaEmail() && validaContrasena() && validaBday() && confirm("Pulsa aceptar si deseas enviar el formulario")){
            return true;
        }else{
            e.preventDefault();
        return false;

    }
}
































/*var validate = function() {
   var form = document.getElementById("theForm");
   if (!form.aInteger.value || isNaN(parseInt(form.aInteger.value))) {
      return false;
   }
   if (!form.aFloat.value || isNaN(parseFloat(form.aFloat.value))) {
      return false;
   }
   if (form.tenChars.value.length < 10) {
      return false;
   }
   var emailRegex = /^\w+@\w+\.\w+$/;
   if (!form.email.value.match(emailRegex)) {
      return false;
   }
   if (form.aSelect.value=="Select one"){
      return false;
   }
   return true;
}
*/
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


