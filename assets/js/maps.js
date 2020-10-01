function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 53.369007,
            lng: -1.372672      
        }
    });

    var labels = "12345678910";

    var locations = [      
        { lat: 53.369007, lng: -1.372672 }, 
        { lat: 53.405551, lng: -1.502073 }, 
        { lat: 53.422125, lng: -1.332714 },
        { lat: 53.407297, lng: -1.447126},
        { lat: 53.346377, lng: -1.459284},
        { lat: 53.416062, lng: -1.191922},
        { lat: 53.382187, lng: -1.496608},
        { lat: 53.523215, lng: -1.124047},
        { lat: 53.403058, lng: -1.378384},
        { lat: 53.338321, lng: -1.472883}   
    ];


    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }
