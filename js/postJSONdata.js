$(document).ready(function() {

		var posteo = function() { //jQuery 
		
			$.ajax(
			{
				type: "POST", //method: "post",
				url: "http://xxx.xxx.xxx.xxx/yacSinVal/",
				data: NewJSON,
				dataType: "json",
				beforeSend: function () {
		            $("#resultado").html("Procesando, espere por favor...");
		                },
		        success: function(NewJSON){
		        	$("#resultado").html("Yacimiento guardado.");
		        },
		        fail: function( xhr, status){
		        	alert("Ha ocurrido un problema.");
		        },
		        
		    }); //cierro .ajax
		};

		var listaDatos = [];

		function upDate(postTitulo, postDes1, postDes2, postLat, postLong, postRegion, postCronologia, postUserID, postValidate){

			var NewJSON = {
				title : postTitulo, 
				des1 : postDes1,
				des2 : postDes2,
				lat : postLat,
				long : postLong,
				region : postRegion,
				cronologia : postCronologia,
				userID : postUserID,
				validate : postValidate

			};
			
			posteo();
			
			console.log(NewJSON);
			listaDatos.push(NewJSON);
			console.log(listaDatos);
		}
	}
});
