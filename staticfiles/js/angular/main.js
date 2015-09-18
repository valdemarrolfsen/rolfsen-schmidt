'use strict';

//-------------------- Application --------------------
var main = angular.module('main', ['ngRoute', 'ngResource', 'ngAnimate',  'ngCookies']);


//-------------------- Configuration --------------------

main.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
  });

main.config(function($httpProvider){
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
      .otherwise({ redirectTo: '/' });
});

