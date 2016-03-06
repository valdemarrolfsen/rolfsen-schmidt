/**
 * Created by rubenschmidt on 05.03.2016.
 */


main.controller('blogController', ['$scope','articles', function blogController($scope, articles) {
    window.document.title = "Blogg | Korde et digitalt studio";
    $scope.articles = articles.data;
    // Take the first article in the list, pop in and save it.
    $scope.headerArticle = $scope.articles.shift();



}]);