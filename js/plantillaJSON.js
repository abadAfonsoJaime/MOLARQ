
var getJSONs = document.getElementById("botonAJAX");

getJSONs.addEventListener('load',inicializarEventos,false);

/*inmediatamente cargada la página se ejecuta la función inicializar eventos*/

function inicializarEventos()
{
  for(var f = 1; f < arguments.length ;f++)
  {
    var ob=document.getElementById('enlace'+f);
    ob.addEventListener('click',presionEnlace,false);
  }
}
/*Registramos el evento click para todos los enlaces: dentro de un for rescatamos la referencia a cada enlace y registramos el evento click indicando que se debe llamar a la función presionEnlace.*/

function presionEnlace(e)
{
    e.preventDefault();
    var url=e.target.getAttribute('href');
    cargarJSON(url); 
}
/*Primero desactivamos el evento por defecto para el hipervínculo, luego llama a la función cargarJSON pasándole como referencia la url que contiene el hipervínculo.*/

var conexion1;
function cargarJSON(url) 
{
  conexion1 = new XMLHttpRequest(); 
  /*este objeto nos permite comunicarnos con el servidor de forma asincrónica*/ 
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open("GET", url, true);
  /*El tercer parámetro indica si se procesarán los datos de forma asíncrona (true) o síncrona (false)*/
  conexion1.send();
  /*Por último nos falta llamar al método send para que comience el proceso*/
}


/*la función procesarEventos que se ejecuta cada vez que el objeto conexion1 de la clase XMLHttpRequest cambia de estado. Tengamos en cuenta que los estados posibles de este objeto son:

    0 No inicializado.
    1 Cargando.
    2 Cargado.
    3 Interactivo.
    4 Completado.
*/

function procesarEventos()
{
  var detalles = document.getElementById("detalles");
  if(conexion1.readyState == 4)
  {
    detalles.innerHTML = conexion1.responseText;
    /*Hace referencia al código php*/
  } 
  else 
  {
    detalles.innerHTML = 'Cargando...';
  }
}