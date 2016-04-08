'use strict';

//-------------------- Application --------------------
var main = angular.module('main', ['ngRoute', 'ngResource', 'ngAnimate', 'ngCookies', 'duScroll', 'KordeCms', 'ngSanitize', '720kb.socialshare']);


//-------------------- Configuration --------------------

main.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});

main.config(function ($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});

main.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'homeController',
                templateUrl: 'static/partials/home_new.html'
            })
        /*.when('/about', {
            templateUrl: 'static/partials/about.html'
        })*/
        .when('/case_studies', {
            controller: 'caseStudiesController',
            templateUrl: 'static/partials/case_studies.html'
        })
        .when('/contact', {
            controller: 'contactController',
            templateUrl: 'static/partials/contact.html'
        })
        .when('/blog', {
            controller: 'blogController',
            templateUrl: 'static/partials/blog.html',
            resolve: {
                articles: function (ArticleFactory) {
                    return ArticleFactory.list()
                }
            }
        })
        .when('/blog/:slug', {
            controller: 'blogPostController',
            templateUrl: 'static/partials/single_blog.html',
            resolve: {
                article: function (ArticleFactory ,$route) {
                    return ArticleFactory.get($route.current.params.slug)
                }
            }
        })
        .otherwise({redirectTo: '/'});
});

