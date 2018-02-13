$(document).ready( function() {
	var template = $( "#template" ).html();
	var compilation = Handlebars.compile( template );

    var data = {
      "username": "genaro",
      "name": "Guillermo",
      "surname": "Gar Gal",
      "birthdate": "02/04/1987",
      "email": "genaro@yahoo.es",
      "userPassword": "*****",
      "occupation": "Turista aficionado"
  }


/*ESTO DEBERIA FUNCIONAR!!*/
	var data;

	if (Worker){
	        // Crear el Web Worker, pasando por parametro el JS secundario
	        myWorker = new Worker( "molarqPooLogin.js" );
	        myWorker.addEventListener( "message", function( profileData )
	          {
	            console.log( profileData );
	            data = JSON.parse( profileData );
	            console.log( data );
	          }
	        )
	    }

	var writeData = compilation( data );

	$( "#userInfo" ).append( writeData );

}); // End of document.ready