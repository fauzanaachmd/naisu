'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'home',
    'portfolio',
    'about',
    'contact'
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
            .when('/portfolio', {
                templateUrl: 'portfolio/portfolio.html',
                controller: 'PortfolioCtrl'
            })
            .when('/portfolio/:id', {
                templateUrl: 'portfolio/portfolio-detail.html',
                controller: 'PortfolioDetailCtrl'
            })
            .when('/contact', {
                templateUrl: 'contact/contact.html',
                controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }])
    .controller('loader', function loader() {
        window.loading_screen.finish();
    })
    .controller('GlobalController', function GlobalController($scope, $location, $timeout) {
        $scope.isActive = function(uri) {
            return uri === $location.path();
        };

        $scope.name = "fauzan";
        $scope.baseUrl = function(file = '') {
            return $location.$$absUrl + file;
        };
        console.log($location.$$absUrl);
    })
    .directive('isotopeNya', ['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            link: function ($scope) {
                $scope.$on('$routeChangeSuccess', function() {
                    $timeout(function () {
                        // var iso = new Isotope(document.getElementsByClassName("isotope"), {
                        //     itemSelector: '.grid-item',
                        //     filter: '.print-design'
                        // });
                        // console.log(iso.items);
                        var $container = $('.isotope');
                        $container.imagesLoaded(function () {
                            $container.isotope({
                                itemSelector: '.grid-item'
                            });
                        });
                        $('.filter-button-group').on( 'click', 'button', function() {
                            var filterValue = $(this).attr('data-filter');
                            // $('.isotope').css({'margin-top': '500px'});
                            $('.isotope').isotope({ filter: filterValue, itemSelector: '.grid-item' }).css({'margin-top': '50px'});
                        });
// change is-checked class on buttons
                        $('.button-group').each( function( i, buttonGroup ) {
                            var $buttonGroup = $( buttonGroup );
                            $buttonGroup.on( 'click', 'button', function() {
                                $buttonGroup.find('.active').removeClass('active');
                                $( this ).addClass('active');
                            });
                        });
                        // alert('route change');
                    }, 2000);
                });
            }
        };
    }]);