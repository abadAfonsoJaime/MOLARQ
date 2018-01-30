
/* +++++++++++ AJAX GET +++++++++++ */

$(document).ready( function() {

	//Cuando el usuario haga click en el boton...
	$("#botonAJAX").click( function() {
		//...pedir por AJAX aL SERVER el JSON que me devolverá
		$.ajax(
		{
			method: "get",
			dataType: "json",
			url: "http://xxx.xxx.xxx.xxx/yacSinVal/",
		})//cierro .ajax

		.done( function( respuesta ) {// ... y recogerlo

			// Traducir el JSON stringificado
			var answer = JSON.parse( respuesta );

			//Pintar por pantalla el titulo del yacimiento

			var output = respuesta.saveTitle;
			var idYac = "#" + output + i;

			$("#cajaYac").append("<p></p>").attr("id", idYac);
			$(idYac).append("<a>" + output + "</a>" + "</br>").attr("href", "JSONvalidate" + i).attr("id", "enlace" + i);
		})//cierro .done
	})//cierro el click
});//cierro el ready

