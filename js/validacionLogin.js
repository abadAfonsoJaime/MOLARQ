
function validarUser(){
    var nombreUsuario = document.getElementById("usernick");
    if ( nombreUsuario.value == ""){
        return false;
    }else{
        return true;
    }
}

function validarPass(){
    var passUsuario = document.getElementById("password");
    if ( passUsuario.value  == "" || passUsuario == NaN ){
        return false;
    }else{
        return true;
    }
}

function validarLogin(){
    var validarPasswd = validarPass();
    var validarUsuario = validarUser();
    if ( validarUser() && validarPass() == true){
    alert("Confirmada su sesion");
    }else{
        mensaje = "";
        if(validarPasswd == false){
        mensaje += "Contraseña incorrecta  "
        }
        if(validarUsuario == false){
            mensaje += "  Usuario incorrecto"
            }
    alert(mensaje);
    }
}


document.getElementById("entrar").addEventListener("click",validarLogin);