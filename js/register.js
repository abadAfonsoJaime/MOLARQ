
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
	this.setUserName = function(newUserName) {
		this.userName = newUserName;
	}
	this.getBirthDate = function() {
		return this.birthDate;
	}
	this.setBirthDate = function(newBirthDate) {
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

function normalUser(name, email, password, userName, birthDate, occupation, id) {		
	User.call(this, name, email, password, userName, birthDate);
	this.occupation = occupation;
	this.id = id;
	this.getOccupation = function() {
		return this.occupation;
	}
	this.setOccupation = function(newOccupation) {
		this.occupation = newOccupation;
	}
	this.getID = function() {
		return this.id;
	}
	this.setID = function(newID) {
		this.id = newID;
	}
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

/* +++++++++++++++++++ Delete local Storaga boton restaurar +++++++++++++++++++ */
var borrarStorage = document.getElementById("deleteLocalStorage");

borrarStorage.addEventListener( "click", function(){

	window.localStorage.clear();
	console.log( "todas las entradas del LocalStorage elimnadas" );
});