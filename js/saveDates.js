var listaDatos = [];

function upDate(pTitulo, pdes1, pdes2, plat, plong){

	var obtener = {
		title : pTitulo, 
		des1 : pdes1,
		des2 : pdes2,
		lat : plat,
		long : plong
	};
	

	console.log(obtener);
	listaDatos.push(obtener);
}