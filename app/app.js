'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'home',
    'portfolio',
    'about'
])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl'
            })
            .when('/about/', {
                templateUrl: 'about/about.html',
                controller: 'AboutCtrl'
            })
            .when('/portfolio/:id', {
                templateUrl: 'portfolio/portfolio.html',
                controller: 'PortfolioCtrl'
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
        $scope.baseUrl = function(file = '') {
            return $location.$$absUrl + file;
        };
        console.log($location.$$absUrl);
        $scope.load = function () {
            window.loading_screen.finish();
        };
    });