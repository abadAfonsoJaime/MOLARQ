$(document).ready(function() {
  $( "#uploadPic" ).click(function() {

    // Get images from upload button
    function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById(outImage).src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }

    // Not supported
    else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
    }
    }

    // Create <i> images and their id
    //Equivalent to $(document.createElement("img"))
    var img = $('<img class="sp-image" src="img/blank.gif" />');
    // Modify the src of each image
    img.attr("data-src", addImage);
    img.appendTo(".slider-pro.sp-slides.sp-slide");

    // The same but with thumbnails
    var thumb = $('<img class="sp-thumbnail" />');
    thumb.attr("src", addImage);
    thumb.appendTo(".slider-pro.sp-thumbnails");
  });
}); // End of document.ready