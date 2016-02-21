/**
 * Created by valdemarrolfsen on 20.02.2016.
 */
main.controller('contactController', ['$scope', function($scope) {

    var map = L.map('map').setView([63.4218305, 10.4046033], 16);
    map.scrollWheelZoom.disable();

    var customIcon = L.icon({
        iconUrl: '/static/img/icons/korde-pin.png',

        iconSize:     [49.85, 74.3], // size of the icon
        iconAnchor:   [24.925, 74.3], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([63.4218305, 10.4046033], {icon: customIcon}).addTo(map)
        //.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        //.openPopup();
}]);