$(document).ready(function() {

/* Hamburger Menu */
  $("#dropButton").click(function() {

    if ($("#dropContent").hasClass("display") == false)
      {
       $("#dropContent").addClass("display");
      }
    else if ($("#dropContent").hasClass ("display") == true) 
      {
       $("#dropContent").removeClass("display");
      }
  });

  /* Modal Window*/
  var modal = document.getElementById("myModal");
  
  // boton que abre el modal
  var btn = document.getElementById("myBtn");


  // span que cierra el modal
  var span = document.getElementsByClassName("close")[0];

  // cuando clickeo el boton abro el modal
  btn.onclick = function() {
      modal.style.display = "block";
  };

  // cuando clickeo el span cierro el modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // cuando clickeo fuera del modal, lo cierro
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };

/*Barra fija al hacer scroll*/
  $(window).scroll(function(){
  if ($(window).scrollTop() >= 72) { // El valor debe ser igual a la altura del header
     $("header").addClass("sticky");
     $(".header").addClass("sticky");
     $(".logo").removeClass("hide");
     $(".brand").addClass("hide");
  }
  else {
     $("header").removeClass("sticky");
     $(".header").removeClass("sticky");
     $(".logo").addClass("hide");
     $(".brand").removeClass("hide");
    }
  });
  
}); /*End of document.ready*/