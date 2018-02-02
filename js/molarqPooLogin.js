function leerLocalStorage( nombreObjetoJSON )
{
  if( typeof localStorage != "undefined" && JSON )
  {
    return JSON.parse( localStorage.getItem( nombreObjetoJSON ) );
  }//Devuelve un JSON
 else
  {
    alert("localStorage no soportado")
  }
}


document.getElementById( "login" ).addEventListener( "click", validarUserJSON );

function validarUserJSON()
{
  
  var elNickIntroducido = document.getElementById ( "usernick" );
  var laPassIntroducida = document.getElementById ( "password" );
  var i = 0;

  do {
    i += 1;
    var nombreJSON = leerLocalStorage( i );
    console.log(nombreJSON);
     if( nombreJSON.userName == elNickIntroducido.value && nombreJSON.userPassword == laPassIntroducida.value )
      {
        window.location.assign( "profile.html" );
        /*postMessage(nombreJSON);*/
      }
  } while (i < localStorage.length);

  setTimeout(function()
  {
    alert( "El user o la contraseña son incorrectos, ¡intentalo otra vez!" );
  }, 1000);
        
  /*    }
  }*/
};

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

normalUser.prototype = Object.create(User.prototype);
adminUser.prototype = Object.create(User.prototype);

//Pura y segura
/*User.prototype.login = function( userName, password ) {

  if(userName == this.userName && password == this.password) {
    return true;
  }
  else {
    return false;
  }
}

document.getElementById("login").addEventListener("click", function(){

  var elNombreUser = document.getElementById ("usernick").value;
  var elPassword = document.getElementById ("password").value;

  if(normalUser1.login(elNombreUser, elPassword ) == true) {
    window.location.assign("profile.html");
  }
  else
  {
    if (normalUser2.login(elNombreUser, elPassword ) == true)
    {
      window.location.assign("profile.html");
    }
    else
    {
      alert("El nombre de usuario o la contraseña son incorrectos, ¡inténtalo otra vez!");
    }
  
  }

});

var normalUser1 = new normalUser ("Patricio García",  //name
                  "patricio@gmail.com",  //email
                  "1234",  //password
                  "Patricioprince",  //userName
                  "Estudiante de campo",  //birthDate
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
             // "1"); //id*/