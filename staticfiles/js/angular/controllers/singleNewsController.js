/**
 * Created by rubenschmidt on 05.03.2016.
 */
main.controller('singleNewsController', ['$scope', '$routeParams', 'ArticleFactory','article', function($scope, $routeParams, ArticleFactory, article) {

    // Get the article data from the resolved variable
    $scope.article = article.data;

    //Set title when route loads
    window.document.title = 'Korde | ' + $scope.article.title;
}]);