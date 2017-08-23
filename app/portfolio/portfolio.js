angular.module('portfolio', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {

    }])
    .controller('PortfolioCtrl', function PortfolioCtrl($scope, $http, $sce) {
            'use strict';
            // var portfolioData = null;

            $http.get('portfolio/portfolio.json')
                .then(function onSuccess(response) {
                    $scope.xList = response.data;
                })
                .catch(function onError(response) {
                    console.log('error');
                });
        }
    )
    .controller('PortfolioDetailCtrl', function PortfolioCtrl($scope, $routeParams, $http, $sce) {
        'use strict';
        var portfolioData = null;

        $http.get('portfolio/portfolio.json')
            .then(function onSuccess(response) {
                portfolioData = response.data;
                $scope.detailData = portfolioData.filter(findPortfolio)[0];
                $scope.contentHTML = $sce.trustAsHtml($scope.detailData.content);

                console.log($scope.detailData);

                function findPortfolio(data) {
                    // var targetData = null;
                    return data.id === parseInt($routeParams.id);
                    // console.log(data.id);
                    // return false;
                }
            })
            .catch(function onError(response) {
                console.log('error');
            });
    }
);