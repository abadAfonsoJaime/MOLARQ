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
	this.getUserName = function() {
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

console.log("is ready");

var inputNombre = document.getElementById( "username" );
var inputCorreo = document.getElementById( "usermail" );
var inputNick = document.getElementById( "usernick" );
var inputPass = document.getElementById( "userpass" );
var inputPass2 = document.getElementById( "userpass2" );
var inputBirthDate = document.getElementById( "userbdate" );
var inputOccupation = document.getElementById( "occupation" );


/*document.getElementById("submit1").addEventListener('click', validar , false);*/

function validaNombre() {
	var valoresValidos = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*) ([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*) ([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

	if ( !inputNombre.value.match( valoresValidos ) )
	{
		console.log( "error Nombre" );
		inputNombre.focus();
		alert( "Introduzca un su Nombre y los dos Apellidos con la primera letra en Mayúscula" );
		return false;
	}
	else
	{
		return true;
	}
}

function comprobarClave() { 
   /* var p1 = document.myForm.userpass.value 
    var p2 = document.myForm.userpass2.value */

    if (inputPass.value !== inputPass2.value) 
        {
        	console.log( "error Password" );
        	alert( "Las dos claves son distintas...\nRepita la misma contraseña en los dos campos" );
        	return false;
        }
    else 
        {
        	return true;
        }
} 

/*function comprobarElSelect() {
	var opciones = document.forms.formularioRegistro.occupation.options;
	for (var i = 1; i < opciones.length; i++)
	{
		if ( opciones.selected.value == i )
		{
        	return true;
		}
		else
		{
			occupation.focus();
        	alert("Elija una ocupación");
        	return false;
		}
	}
}*/

/*function comprobarCheckbox() {
	var casillaCheck = document.getElementById("tos");
	if ( casillaCheck.selected )
	{
		return true;
	}
		else
		{
		console.log("error checkbox");
		return false;
		}
}*/

/*function comprobarFecha() {
	var fecha = document.getElementById("userbdate");
	if ( fecha.selected )
	{
		return true;
	}
		else
		{
		console.log("error Fecha");
		return false;
		}
}*/

function validar( event ){
    var userID = localStorage.length + 1; // .length devuelve un string! => CONCATENACION
    var normalUserJSON =
		{
			"name" : inputNombre.value,
			"email" : inputCorreo.value,
			"birthDate" : inputBirthDate.value,
			"userName" : inputNick.value,
			"userPassword" : inputPass2.value,
			"occupation" : inputOccupation.value
		}
	var almacenar = JSON.stringify( normalUserJSON );
	

    if ( !validaNombre() ||
    	!comprobarClave() )/*!comprobarElSelect() || !comprobarFecha() ||
    	!comprobarCheckbox()  && confirm("Pulsa aceptar si deseas enviar el formulario")*/
    {
        console.log( "alguna funcion falla" );
        event.preventDefault();
        window.location.assign( "#" );
/*        return true;*/
    }
    else 
	{
 		console.log( almacenar );
 		escribirLocalStorage( userID, almacenar );
        console.log( "todas las funciones OK" );
        console.log(  );
    }
}

/* ++++++++++++++ PROMESA LOCAL STORAGE ++++++++++++++ */
function escribirLocalStorage( nombreObjeto, elObjeto )
{
	if (typeof localStorage != "undefined" && JSON)
	{
		localStorage.setItem(nombreObjeto, elObjeto);
		console.log("okSetItem");
	}
	else
	{
		alert("localStorage no soportado")
	}
}

/*function resolve()
{
	var elNombre = newNormalUservalue.name;
	var elMail = newNormalUservalue.email;
	var elBirthDate = newNormalUservalue.birthDate;
	var elNickname = newNormalUservalue.userName();
	var laPassword = newNormalUservalue.password;
	var elOccupation = newNormalUservalue.getOccupation();

	var idUsuarioAlmacenado = localStorage.length + 1;	// .length devuelve un string! => CONCATENACION

	var normalUserJSON =
	{
		"name" : elNombre,
		"email" : elMail,
		"birthDate" : elBirthDate,
		"userName" : elNickname,
		"userPassword" : laPassword,
		"occupation" : elOccupation
	}

	var almacenar = JSON.stringify( normalUserJSON );
	console.log( almacenar );

	localStorage.setItem( idUsuarioAlmacenado, almacenar );
	console.log( "almacenado en Local Storage" );
} //Cierro la función del if

function reject()
{
	console.log( "ERROR: no se ha podido registrar al usuario" );
} //Cierro la función del else


var miPromesa = new Promise( function( resolve, reject )
{

		if ( newNormalUser != "undefined" )
			{
				resolve();
			}
			else
			{
				reject();
			}

});	//Cierro condición discriminatoria
//Cierro función prometedora


//Explotamos la promesa
miPromesa.then().catch();*/
