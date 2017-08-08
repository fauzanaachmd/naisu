'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'home'
])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }])
    .controller('GlobalController', function GlobalController($scope, $location) {
        $scope.isActive = function(uri) {
            return uri === $location.path();
        };

        $scope.name = "fauzan";
        $scope.baseUrl = $location.$$absUrl;
        console.log($location.$$absUrl)
    });