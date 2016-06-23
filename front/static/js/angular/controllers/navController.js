
main.controller('navController', ['$scope', '$location', function navController($scope, $location) {

    $scope.checkSelected = function(path) {
        return $location.path() == path;
    }

}]);