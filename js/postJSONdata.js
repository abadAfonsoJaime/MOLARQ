var listaDatos = [];

function upDate(postTitulo, postDes1, postDes2, postLat, postLong, postRegion, postCronologia, postUserID){

	var obtener = {
		title : postTitulo, 
		des1 : postDes1,
		des2 : postDes2,
		lat : postLat,
		long : postLong,
		region : postRegion,
		cronologia : postCronologia,
		userID : postUserID,

	};
	

	console.log(obtener);
	listaDatos.push(obtener);
	console.log(listaDatos);
}