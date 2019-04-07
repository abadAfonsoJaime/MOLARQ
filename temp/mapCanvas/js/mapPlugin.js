// marker.addListener("click", toggleBounce);
// In the following example, markers appear when the user clicks on the map.
// The markers are stored in an array.
// The user can then click an option to hide, show or delete the markers.
var map;
var markers = [];

function initMap() {
  var centerMap = {lat: 40.416, lng: -3.702};

  var mapOptions = {
    zoom: 6,
    center: centerMap,
    mapTypeControlOptions: {
         mapTypeIds: [google.maps.MapTypeId.roadmap, 'GrayScale']
    }
  };

  var mapStyle = [
      {
        featureType: 'all',
        elementType: 'all',
        stylers: [
          { saturation: -100 }
        ]
      }
  ];

  // Paint the map inside the div elemnent.
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  // Style the color of the map.
  var mapType = new google.maps.StyledMapType(mapStyle, { name:'MolarQ' });
  map.mapTypes.set('GrayScale', mapType);
  map.setMapTypeId('GrayScale');

  // This event listener will call addMarker() when the map is clicked.
  map.addListener('click', function(event) {
    addMarker(event.latLng);
  });

  // Adds a marker at the center of the map.
  addMarker(centerMap);
};

// Adds a marker to the map and push to the array.
function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker);
};

// Sets the map on all markers in the array.
function saveMarkersArray(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
};

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  saveMarkersArray(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  saveMarkersArray(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}