function leerLocalStorage(nombreObjetoJSON)
{
	if(typeof localStorage != "undefined")
	{
		return JSON.parse(localStorage.getItem(nombreObjetoJSON));
	}//Devuelve
	else
	{
		alert("localStorage no soportado")
	}
}


document.getElementById("enviar").addEventListener("click", validarUserJSON);

function validarUserJSON()
{
		var usuarioUnico = leerLocalStorage("2-1");
		var elNickIntroducido = document.getElementById ("usernick").value;
		var laPassIntroducida = document.getElementById ("password").value;

		if(usuarioUnico.userName == elNickIntroducido && usuarioUnico.password == laPassIntroducida)
		{
			window.location.assign("profile.html");
		}
		else
		{
			alert("El user o la contraseña son incorrectos, ¡intentalo otra vez!");
		}
};