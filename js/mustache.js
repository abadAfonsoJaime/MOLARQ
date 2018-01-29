



var miUserForm = {
    "nombre":"",
    "email":"",
    "Pass":"",
    "confirmacionPass":"",
    "Nick":"",
    "Ocupacion":"",
    "Nacimiento":"",
    "Imagen":""
};

function cargarDatos(){
    var plantilla = "Los datos del nuevo usuario son {{nombre}}, {{email}}, {{Pass}}, {{confirmacionPass}},{{Nick}},{{Ocupacion}},{{Nacimiento}},{{Imagen}}";

    var rendered = Mustache.render(plantilla, vista);
    $('#').html(rendered);
}


$(document).ready( function(){
    cargaDatos();
});
