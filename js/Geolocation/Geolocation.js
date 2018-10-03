// globale Variablen
var pfadiheim = {lat: 47.593749, lng: 8.987449}; // Ort vom Pfadiheim

// Initialisieren der Map (index.html)
function initMap() {
    // Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: pfadiheim
    });

    // Marker beim Pfadiheim
    var marker = new google.maps.Marker({position: pfadiheim, map: map});
}
