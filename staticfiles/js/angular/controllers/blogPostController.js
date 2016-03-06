/**
 * Created by rubenschmidt on 05.03.2016.
 */
main.controller('blogPostController', ['$scope', '$routeParams', 'ArticleFactory', 'article', function ($scope, $routeParams, ArticleFactory, article) {

    // Get the article data from the resolved variable
    $scope.article = article.data;

    //Set title when route loads
    window.document.title = $scope.article.title + ' | Korde';

    $scope.share = function () {
        FB.ui(
            {
                method: 'feed',
                name: $scope.article.title,
                link: 'http://www.korde.no/blog/' + $scope.article.slug,
                description: $scope.article.body_text,
                message: ''
            });
    }
}]);