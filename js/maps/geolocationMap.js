//lat, lng des Bahnhofs Müllhiem-Wigoltingen festlegen, falls GeoLocation nicht möglich. Position des bahnhofes in Müllheim-Wigoltingen.
var lat = 47.588262;
var lng = 9.015516;

document.addEventListener("deviceready", onDeviceReady, false);
var watchID = null;

//Lat, LNG herausfinden. Funktioniert aber nicht
var onSuccess = function(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
};

// device APIs are available
function onDeviceReady() {
    // Throw an error if no update is received every 30 seconds
    var options = { timeout: 30000 };
    watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
}

// onError Callback receives a PositionError object
function onError() {
    alert('Ihr Standort konnte nicht lokalisiert werden!\n');
}

//Google Maps aufrufen und darstellen
function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 47.576693, lng: 8.948240}
    });
    directionsDisplay.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsDisplay);
}

//Pfad berechnen und darstellen
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: new google.maps.LatLng(lat, lng),
        destination: new google.maps.LatLng(47.593689, 8.987415),
        travelMode: 'WALKING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}