$(document).ready( function() {

// var compile = Handlebars.compile($("#template").html());

// $("#userInfo").append(compile(data));

/* // Esto es lo mismo pero por pasos
var template = $("#template").html();
var compile = Handlebars.compile(template);
var html = compile(data);
$("#userInfo").append(html);
*/


	var template = $("#template").html();
	var compilation = Handlebars.compile(template);

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