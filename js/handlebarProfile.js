$(document).ready( function() {
	var template = $("#template").html();
	var compilation = Handlebars.compile(template);


/*ESTO DEBERIA FUNCIONAR!!
	var data;

	if (Worker){
	        // Crear el Web Worker, pasando por parametro el JS secundario
	        myWorker = new Worker("molarqPooLogin.js");
	        myWorker.addEventListener("message",function(profileData)
	          {
	            data = (profileData.data);
	          }
	        )
	    }
*/

	var data = {
		"nickname": "PatricioPrince",
    	"username": "Patricio",
    	"surname": "Gor Zas",
    	"birthdate": "02/02/2018",
    	"email": "patricio@gmail.com",
    	"password": "1234",
      "role": "Turista aficionado"
	}

	var writeData = compilation(data);

	$("#userInfo").append(writeData);

}); // End of document.ready