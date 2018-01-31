function User (name, email, password, userName, birthDate){
	this.name = name;
	this.email = email;
	this.password = password;
	this.userName = userName;
	this.birthDate = birthDate;
	
	this.getName = function() {
		return this.name;
	}
	this.setName = function(newName) {
		this.name = newName;
	}
	this.getEmail = function() {
		return this.email;
	}
	this.setEmail = function(newEmail) {
		this.email = newEmail;
	}
	this.getPassword = function() {
		return this.password;
	}
	this.setPassword = function(newPassword) {
		this.password = newPassword;
	}
	this.getuserName = function() {
		return this.userName;
	}
	this.setuserName = function(newUserName) {
		this.userName = newUserName;
	}
	this.getbirthDate = function() {
		return this.birthDate;
	}
	this.setbirthDate = function(newBirthDate) {
		this.birthDate = newBirthDate;
	}
	this.crearYacimiento = function() {
		return 
	}
	this.apuntarEvento = function() {
		return
	}
	this.comentar = function(text) {
		return text
	}
	this.darLike = function() {
		return 
	}


}

function normalUser(name, email, password, userName, birthDate, ocuppation, id) {		
	User.call(this, name, email, password, userName, birthDate);
	this.ocuppation = ocuppation;
	this.id = id;
}

function adminUser(name, email, password, userName, birthDate, id) {		
	User.call(this, name, email, password, userName, birthDate);
	this.id = id;
	this.baner = function() {
		return
	}
	this.aceptarYacimiento = function() {
		return
	}
}

function yacimiento(nameYac, region, coordinates, description, cronoCivi, accepted, id) {		
	normalUser.call(this, id);
	adminUser.call(this, id);
	this.nameYac = nameYac;
	this.region = region;
	this.coordinates = coordinates;
	this.description = description;
	this.cronoCivi = cronoCivi;
	this.accepted = accepted;
}


//Pura y segura
User.prototype.login = function( userName, password ) {

	if(userName == this.userName && password == this.password) {
		return true;
	}
	else {
		return false;
	}
}

normalUser.prototype = Object.create(User.prototype);
adminUser.prototype = Object.create(User.prototype);



var registerButton = document.getElementById("register");
registerButton.addEventListener("click", nuevoUsuario);

function escribirLocalStorage(nombreObjeto, elObjeto)
{
	if (typeof localStorage != "undefined")
	{
		localStorage.setItem(nombreObjeto, elObjeto);
	}
	else
	{
		alert("localStorage no soportado")
	}
}

var nombreUsuario;

function nuevoUsuario()
{
	var userID;
	var name = document.getElementById("username").value;
	var email = document.queryselector("#usermail").value;
	var userName = document.queryselector("#usernick").value;
	var password = document.queryselector("#userpass2").value;
	var birthDate = document.queryselector("#userbdate").value;
	var occupation = document.queryselector("#occupation").value;
	userID = userID + 1;

	nombreUsuario = ocuppation + "-" + userID;

	var objetoUsuario = new normalUser(name, email, userName, password, birthDate, occupation, userID);
	console.log(usuario);

	var normalUserJSON = 
		{
			"username" : name,
			"email" : email,
			"nickname" : userName,
			"password" : password,
			"birthdate" : birthDate,
			"occupation" : occupation,
			"id" : userID,
		};

	escribirLocalStorage(nombreUsuario, JSON.stringify(normalUserJSON));
}




/*document.getElementById("enviar").addEventListener("click", function(){

	var elNombreUser = document.getElementById ("usernick").value;
	var elPassword = document.getElementById ("password").value;

	if(usuarioUnico.login(elNombreUser, elPassword ) == true) {
		window.location.assign("index_alt.html");
	}
	else
	{
		if (normalUser2.login(elNombreUser, elPassword ) == true)
		{
			window.location.assign("profile.html");
		}
		else
		{
			alert("El user o la contraseña son incorrectos, ¡intentalo otra vez!");
		}
	
	}

});
*/

/*document.getElementById("enviar").addEventListener("click", function(){

	var elNombreUser = document.getElementById ("usernick").value;
	var elPassword = document.getElementById ("password").value;

	if(normalUser1.login(elNombreUser, elPassword ) == true) {
		window.location.assign("index_alt.html");
	}
	else
	{
		if (normalUser2.login(elNombreUser, elPassword ) == true)
		{
			window.location.assign("profile.html");
		}
		else
		{
			alert("El user o la contraseña son incorrectos, ¡intentalo otra vez!");
		}
	
	}

});*/

// User.prototype.register = function(name, email, password, userName, ocuppation, birthDate) {
// 	if(userName == this.userName && email == this.email && password == this.password && userName == this.userName && ocuppation == this.ocuppation && birthDate == this.birthDate) {
// 		return true;
// 	}
// }

// normalUser.prototype = Object.create(User.prototype);
// adminUser.prototype = Object.create(User.prototype);


// document.getElementById("register").addEventListener("click", function(){

// 	var elName = document.getElementById("username").value;
// 	var elEmail = document.getElementById("usermail").value;
// 	var elPassword = document.getElementById ("userpass").value;
// 	var elNombreUser = document.getElementById ("usernick").value;
// 	var laOcuppation = document.getElementById("occupation").value;
// 	var elBirthDate = document.getElementById("userbdate").value;
	 	

// 	if(normalUser1.register(elName, elNombreUser, elPassword, elNombreUser, laOcuppation, elBirthDate) == true)
// 	{
// 		window.location.assign("login.html");
// 	}
// 	else
// 	{
// 		alert("No se ha podido enviar tu petición de registro ¡comprueba que todos los campos estén correctamente completados!");
// 	}

// });



var normalUser1 = new normalUser ("Patricio Garcia",  //name
								  "patricio@gmail.com",  //email
								  "1234",  //password
								  "Patricioprince",  //userName
								  "Estudiante en el campo",  //birthDate
							      "22.03.1989"); //ocuppation
var normalUser2 = new normalUser ("Conchita", //name 
					  "concha@gmail.com", //email
					  "1234", //password
					  "Conchaqueen",  //userName
					  "20.08.1960");//birthDate
					   // "Docente en el campo", //ocuppation
					   // "1"); //id
var normalUser3 = new normalUser ("Pepe", //name 
					  "pepe@gmail.com", //email
					  "1234", //password
					  "Pepeking",  //userName
					  "11.06.1991");//birthDate
					   // "Docente en el campo", //ocuppation
					   // "1"); //id








