$(document).ready(function() {
  // Obtener JSON del servidor mediante Ajax
  console.log("ajax");

  var getJSON = $.ajax({
      url: "http://192.168.201.102/molarq/molarq.php",
      method: "get",
      dataType: "json",
      data: { idsite : 2 }//numero: yacimiento que pido
  });

  getJSON.done(function(response) {
    // Parsear JSON obtenido mediante Ajax arriba
    /*var answer = JSON.parse( response );*/
    console.log(response);
    // Pintar mediante JS los elementos del JSON en la vista adminValidate.html
    $(".site-description")
    .append( "<h1>" + response.title + "</h1>").attr("id", "title");
    $(".site-description").append( "<small>" + response.descriptionShort + "</small>" ).attr("id", "descriptionShort");;
    $(".site-description").append( "<p>" + response.descriptionLong + "</p>" ).attr("id", "descriptionLong");

    $(".leftAdmin")
    .append( "<div><strong> Latitud: </strong>" + response.latitude + "</div>" ).attr("id", "latitude");
    $(".leftAdmin").append( "<div><strong> Longitud: </strong>" + response.longitude + "</div>" ).attr("id", "longitude");

    $(".leftAdmin")
    .append( "<div><strong> Provincia: </strong>" + response.region + "</div>" ).attr("id", "region");
    $(".leftAdmin").append( "<div><strong> Epoca: </strong>" + response.crono + "</div>" ).attr("id", "crono");
    console.log(response);
      // Cambiar el campo validate de reject a ok con un botón
      $("#validate").click( function() {
        
          $.put("urlXXX.XXX", {idsite:"response.id", validate:"1"}, function(result){        
          });
      });
      $("#reject").click( function() {
        
          $.put("urlXXX.XXX", {idsite:"response.id", validate:"-1"}, function(result){        
          });
      });
    });
}); // End of document.ready



document.querySelector('#validar').addEventListener('click', markerData);

function markerData(){

  var arrayLatitude = document.querySelector('#latitude').value,
         arrayLongitud = document.querySelector('#longitude').value,
         arrayTitle = document.querySelector('#title').value,
         arrayShortDescription = document.querySelector('#descriptionShort').value,
         arrayRegion = document.querySelector('#region').value,
         arrayCronologia = document.querySelector('#crono').value;

  var newMarker = [arrayLatitude, arrayLongitud, arrayTitle, arrayShortDescription, arrayRegion, arrayCronologia];

  postMessage(newMarker.splice(2, 0, 'img/marker_green.png').splice(6, 0, false));
};