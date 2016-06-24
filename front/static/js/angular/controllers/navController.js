
main.controller('navController', ['$scope', '$location', function navController($scope, $location) {

    $scope.showNav = false;

    $scope.checkSelected = function(path) {
        return $location.path() == path;
    }

    $scope.toggleNav = function() {
        $scope.showNav = !$scope.showNav;
    }

}]);