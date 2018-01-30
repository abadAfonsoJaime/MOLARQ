/*$(document).ready( function() {

var data = {
      "nickname": "anonymus",
      "username": "Anon",
      "surname": "Nymus",
      "birthdate": "10/10/1923",
      "email": "me@gmail.com",
      "password": "1234"
};



var compile = Handlebars.compile($("#template").html());

$("#userInfo").append(compile(data));

});*/ // End of document.ready

/* // Esto es lo mismo pero por pasos
var template = $("#template").html();
var compile = Handlebars.compile(template);
var html = compile(data);
$("#userInfo").append(html);
*/


	var cogerTemplate = $("#template").html();
	var compilation = Handlebars.compile(cogerTemplate);

	var data = {
		"nickname": "anonymus",
    	"username": "Anon",
    	"surname": "Nymus",
    	"birthdate": "10/10/1923",
    	"email": "me@gmail.com",
    	"password": 1234
	}

	var pasarDatos = compilation(data);

	$("#userInfo").append(pasarDatos);

