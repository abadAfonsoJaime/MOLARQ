document.querySelector('#saveDataBtn').addEventListener('click',saveData);

function saveData(){
	var sTitle = document.querySelector('#title').value,
	 sDes1 = document.querySelector('#comment').value,
	 sDes2 = document.querySelector('#comment2').value,
	 sLat = document.querySelector('#latitud').value,
	 sLong = document.querySelector('#longitud').value;



	upDate(sTitle,sDes1,sDes2,sLat,sLong);
}


