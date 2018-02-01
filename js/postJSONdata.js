$(document).ready(function() {
				document.querySelector('#saveDataBtn').addEventListener('click',saveData);

			function saveData(){
				var saveTitle = document.querySelector('#title').value,
				 saveDes1 = document.querySelector('#comment').value,
				 saveDes2 = document.querySelector('#comment2').value,
				 saveLat = document.querySelector('#latitud').value,
				 saveLong = document.querySelector('#longitud').value,
				 saveRegion = document.querySelector('#region').value,
				 saveCronologia = document.querySelector('#period').value,
				 saveUserID = "1",//NI PUTA IDEA DE ESTE CAMPO
				 

				 console.log("recoge datos");



				createJSON( saveTitle, saveDes1, saveDes2, saveLat, saveLong, saveRegion, saveCronologia, saveUserID );
			}


		var posteo = function(elJSON) { //jQuery 
		
			$.ajax(
			{
				type: "POST", //method: "post",
				url: "http://192.168.201.102/molarq/molarq.php",
				data: elJSON,
				dataType: "json",
				beforeSend: function () {
		            $("#resultadoAjax").html("Procesando, espere por favor...");
		                },
		        success: function(NewJSON){
		        	$("#resultadoAjax").html("Yacimiento guardado.");
		        },
		        fail: function( xhr, status){
		        	alert("Ha ocurrido un problema.");
		        },
		        
		    }); //cierro .ajax
		};

		var listaDatos = [];

		function createJSON(postTitulo, postDes1, postDes2, postLat, postLong, postRegion, postCronologia, postUserID){

			var NewJSON = {
				title : postTitulo, 
				des1 : postDes1,
				des2 : postDes2,
				lat : postLat,
				long : postLong,
				region : postRegion,
				cronologia : postCronologia,
				userID : postUserID
				};
			
			posteo(NewJSON);
			
			console.log(NewJSON);
			listaDatos.push(NewJSON);
			console.log(listaDatos);
		}
});


/*39.110491, -2.114128*/