'use strict';

//-------------------- Application --------------------
var main = angular.module('main', ['ngRoute', 'ngResource', 'ngAnimate', 'ngCookies', 'duScroll']);


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
                templateUrl: 'static/partials/home.html'
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
        .otherwise({redirectTo: '/'});
});

