
/*OBJETOS*/
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




var registerButton = document.getElementById("register");
registerButton.addEventListener("click", nuevoUsuario);

function escribirLocalStorage(nombreObjeto, elObjeto)
{
	if (typeof localStorage != "undefined" && JSON)
	{
		localStorage.setItem(nombreObjeto, elObjeto);
		console.log("okSetItem");
		window.location.assign("login.html");
	}
	else
	{
		alert("localStorage no soportado")
	}
}


function nuevoUsuario()
{
	
	var name = document.getElementById("username").value;
	var email = document.getElementById("usermail").value;
	var userName = document.getElementById("usernick").value;
	var pas0rd = document.getElementById("userpass2").value;
	var birthDate = document.getElementById("userbdate").value;
	var occupation = document.getElementById("occupation").value;

	nombreUsuario = localStorage.length + 1;

	var objetoUsuario = new normalUser(name, email, userName, password, birthDate, occupation, userID);

	var normalUserJSON = 
		{
			"username" : name,
			"email" : email,
			"nickname" : userName,
			"password" : password,
			"birthdate" : birthDate,
			"occupation" : occupation
		};
	var almacenar = JSON.stringify( normalUserJSON )
	console.log(almacenar);
	escribirLocalStorage( nombreUsuario, almacenar );

}


var borrarStorage = document.getElementById("deleteLocalStorage");
borrarStorage.addEventListener("click", function(){
	localStorage.clear();
	console.log("todas las entradas del LocalStorage elimnadas");
});