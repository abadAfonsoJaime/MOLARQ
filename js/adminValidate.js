$(document).ready(function() {
  // Obtener JSON del servidor mediante Ajax
  var getJSON = $.ajax({
      url: "XXX",
      method: "get",
      dataType: "json"
      });

  getJSON.done(function(response) {
    // Parsear JSON obtenido mediante Ajax arriba
    var answer = JSON.parse( response );

    // Pintar mediante JS los elementos del JSON en la vista adminValidate.html
    $(".site-description")
    .append( "<h1>" + response.saveTitle + "</h1>").attr("id", response.title)
    .append ( "<small>" + response.des1 + "</small>" )
    .append ( "<p>" + response.des2 + "</p>" );
    $(".leftAdmin")
    .append ( "<div>" + response.lat + "</div>" )
    .append ( "<div>" + response.region + "</div>" );
    $(".rightAdmin")
    .append ( "<div>" + response.long + "</div>" )
    .append ( "<div>" + response.cronologia + "</div>" );

      // Cambiar el campo validate de reject a ok con un botón
      $("#validate").click( function() {
        
          $.put("urlXXX.XXX", {id: "response.id", validate:"ok"}, function(result){
          console.log(result);
          });
        };

      });
    });

}); // End of document.ready