/**
 * Created by valdemarrolfsen on 20.02.2016.
 */
main.controller('contactController', ['$scope', function($scope) {

    var map = L.map('map').setView([59.8950234, 10.6290052], 15);
    map.scrollWheelZoom.disable();

    var customIcon = L.icon({
        iconUrl: '/static/img/icons/korde-pin.png',

        iconSize:     [63.9, 86.55], // size of the icon
        iconAnchor:   [31.95, 86.55], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([59.8950234, 10.6290052], {icon: customIcon}).addTo(map)
        //.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        //.openPopup();
}]);