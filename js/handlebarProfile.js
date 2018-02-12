$(document).ready( function() {
	var template = $( "#template" ).html();
	var compilation = Handlebars.compile( template );

    var data = {
    "userName": "PatricioPrince",
      "username": "Patricio",
      "surname": "Gor Zas",
      "birthdate": "02/02/2018",
      "email": "patricio@gmail.com",
      "userPassword": "********",
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