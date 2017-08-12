
angular.module('home', ['ngRoute', 'iso.directives'])

.config(['$routeProvider', function($routeProvider) {

}])

.controller('HomeCtrl', function HomeCtrl($scope) {
    var layer1 = $("#layer1");
    var layer2 = $('#layer2');
    var layer3 = $('#layer3');
    var layer4 = $('#layer4');
    var layer5 = $('#layer5');
    var layer6 = $('#layer6');
    layer1.homePos = { x: layer1.offset().left, y: layer1.offset().top };
    layer2.homePos = { x: layer2.offset().left, y: layer2.offset().top };
    layer3.homePos = { x: layer3.offset().left, y: layer3.offset().top };
    layer4.homePos = { x: layer4.offset().left, y: layer4.offset().top };
    layer5.homePos = { x: layer5.offset().left, y: layer5.offset().top };
    layer6.homePos = { x: layer6.offset().left, y: layer6.offset().top };

    $('#parallax-container').mousemove(function (e) {
        parallax(e, layer1, 40);
        parallax(e, layer2, 30);
        parallax(e, layer3, 10);
        parallax(e, layer4, 20);
        parallax(e, layer5, 50);
        parallax(e, layer6, 60);
    });

    $scope.xList = [
            {'id':1,'name':'modivation','class':'branding', 'classname': 'branding','img':'assets/img/portfolio/modivation/thumbnail.png'},
            {'id':2,'name':'keen','class':'branding', 'classname': 'branding','img':'assets/img/portfolio/keen/thumbnail.png'},
            {'id':3,'name':'snctry & co','class':'print-design', 'classname': 'print design','img':'assets/img/portfolio/snctry&co/thumbnail.png'},
            {'id':4,'name':'amavi','class':'branding', 'classname': 'branding','img':'assets/img/portfolio/amavi/thumbnail.png'},
            {'id':5,'name':'adil mochtar','class':'branding', 'classname': 'branding','img':'assets/img/portfolio/adil-mochtar/thumbnail.png'},
            {'id':6,'name':'anp-insight','class':'branding', 'classname': 'branding','img':'assets/img/portfolio/anp-insight/thumbnail.png'}
        ];

    // $scope.load = function () {
    //     console.log('Loading');
    // };
    //
    // $scope.load();
});