document.querySelector('#saveDataBtn').addEventListener('click',saveData);

function saveData(){
	var saveTitle = document.querySelector('#title').value,
	 saveDes1 = document.querySelector('#comment').value,
	 saveDes2 = document.querySelector('#comment2').value,
	 saveLat = document.querySelector('#latitud').value,
	 saveLong = document.querySelector('#longitud').value,
	 saveRegion = document.querySelector('#region').value,
	 saveCronologia = document.querySelector('#period').value;



	upDate( saveTitle, saveDes1, saveDes2, saveLat, saveLong, saveRegion, saveCronologia );
}


