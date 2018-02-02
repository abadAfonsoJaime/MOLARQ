console.log("is ready");
/*document.getElementById("submit1").addEventListener('click', validar , false);*/

function validaNombre() {
	var valoresValidos = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*) ([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*) ([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
	var campo = document.getElementById("username");

	if ( !campo.value.match( valoresValidos ) )
	{
		console.log("error Nombre");
		campo.focus();
		alert("Introduzca un su Nombre y los dos Apellidos con la primera letra en Mayúscula");
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

    var p1 = document.getElementById("userpass");
    var p2 = document.getElementById("userpass2");

    if (p1.value !== p2.value) 
        {
        	console.log("error Password");
        	alert("Las dos claves son distintas...\nRepita la misma contraseña en los dos campos");
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

function validar(event){
    if ( !validaNombre() ||
    	!comprobarClave() )/*!comprobarElSelect() || !comprobarFecha() ||
    	!comprobarCheckbox()  && confirm("Pulsa aceptar si deseas enviar el formulario")*/
    {
        console.log("alguna funcion falla");
        event.preventDefault();
        window.location.assign("#");
/*        return true;*/
    }
    else 
	{
        
        console.log("todas las funciones OK");
    }
}


