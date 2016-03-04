/**
 * Created by rubenschmidt on 21.07.15.
 */
'use strict';

main.controller('homeController', ['$scope', '$timeout', function homeController($scope, $timeout) {
    window.document.title = "Velkommen | Korde et digitalt studio";

    $scope.show = {};
    $scope.show.introHeader = false;
    $scope.show.introText = false;


    $timeout(function() {
    	$scope.show.introHeader = true;
    }, 500);

    $timeout(function() {
    	$scope.show.introText = true;
    }, 1500)

}]);