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
	// this.logearse = function() {
	// 	return 
	// }

}

function normalUser(name, email, password, userName, birthDate, ocuppation, id) {		
	user.call(this, name, email, password, userName, birthDate);
	this.ocuppation = ocuppation;
	this.id = id;
}

function adminUser(name, email, password, userName, birthDate, id) {		
	user.call(this, name, email, password, userName, birthDate);
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

var user1 = new User ("Pepe", //name 
								  "pepe@gmail.com", //email
								  "1234", //password
								  "Pepeking",  //userName
								  "11.06.1991")//birthDate

								  // , 
								  // "Docente en el campo", //ocuppation
								  // "1"); //id

var user2 = new User ("Conchita", //name 
								  "concha@gmail.com", //email
								  "1234", //password
								  "Conchaqueen",  //userName
								  "20.08.1960")//birthDate

								  // , 
								  // "Docente en el campo", //ocuppation
								  // "1"); //id


User.prototype.login = function(userName, password ) {
	if(userName == this.userName && password == this.password) {
		return true;
	}
	else {
		return false;
	}
}



document.getElementById("enviar").addEventListener("click", function(){

	var elNombreUser = document.getElementById ("usernick").value;
	var elPassword = document.getElementById ("password").value;

	if(user1.login(elNombreUser, elPassword ) == true) {
		window.location.assign("index_alt.html");
	}
	else
	{
		if (user2.login(elNombreUser, elPassword ) == true)
		{
			window.location.assign("index_alt.html");
		}
		else
		{
			alert("El user o la contraseña son incorrectos, ¡intentalo otra vez!");
		}
	
	}

});














