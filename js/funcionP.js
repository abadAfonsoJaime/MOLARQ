
document.querySelector('#putDataBtn').addEventListener('click', markerData);

function markerData(){
	var Latit = document.querySelector('#latitud').value,
	Longit = document.querySelector('#longitud').value,
	Title = document.querySelector('#title').value,
	ShortDescription = document.querySelector('#comment').value,
	Region = document.querySelector('#region').value,
	Cronologia = document.querySelector('#period').value,



	arrayMarker( Latit, Longit, Title, ShortDescription, Region, Cronologia);
}

function arrayMarker(arrayLatit, arrayLongit, arrayTitle, arrayShortDes, arrayRegion, arrayCronologia)
{

		var newMarker = [arrayLatit, arrayLongit,  arrayTitle, arrayShortDes, arrayRegion, arrayCronologia];

		postMessage(newMarker.splice(2, 0, 'img/marker_green.png').splice(6, 0, false));
};
