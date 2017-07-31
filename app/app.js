'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'home'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $routeProvider.otherwise({redirectTo: '/home'});

    $routeProvider.when('/', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    })
}]);
