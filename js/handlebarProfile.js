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
		"nickname": "Patricioprince",
    	"username": "Patricio",
    	"surname": "García",
    	"birthdate": "22.03.1989",
    	"email": "patricio@gmail.com",
    	"password": "1234"
	}

	var writeData = compilation(data);

	$("#userInfo").append(writeData);

}); // End of document.ready