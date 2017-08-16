
angular.module('home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

}])

.controller('HomeCtrl', function HomeCtrl($scope, $route) {
    $scope.$on('$routeChangeSuccess', function () {
        $scope.xList = [
            {'id':1,'name':'modivation','class':'branding', 'classname': 'branding','img':'assets/img/portfolio/modivation/thumbnail.png'},
            {'id':2,'name':'keen','class':'branding', 'classname': 'branding','img':'assets/img/portfolio/keen/thumbnail.png'},
            {'id':3,'name':'snctry & co','class':'print-design', 'classname': 'print design','img':'assets/img/portfolio/snctry&co/thumbnail.png'},
            {'id':4,'name':'amavi','class':'branding', 'classname': 'branding','img':'assets/img/portfolio/amavi/thumbnail.png'},
            {'id':5,'name':'adil mochtar','class':'branding', 'classname': 'branding','img':'assets/img/portfolio/adil-mochtar/thumbnail.png'},
            {'id':6,'name':'anp-insight','class':'branding', 'classname': 'branding','img':'assets/img/portfolio/anp-insight/thumbnail.png'}
        ];
    });

    // $scope.load = function () {
    //     console.log('Loading');
    // };
    //
    // $scope.load();
})
    .directive('parallaxNya', ['$timeout', function ($timeout) {
        return {
            link: function ($scope) {
                $scope.$on('$routeChangeSuccess', function() {
                    function parallax(e, target, layer) {
                        var x = target.homePos.x - (e.pageX - target.homePos.x) / layer;
                        var y = target.homePos.y - (e.pageY - target.homePos.y) / layer;
                        $(target).offset({ top: y ,left : x });
                    }

                    // $('.home-hero-parallax').css({'margin-top': '-114px'});

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
                });
            }
        };
    }])
    .directive('isotopeNya', ['$timeout', function ($timeout) {
        return {
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
                    });

                    $('.filter-button-group').on( 'click', 'button', function() {
                        var filterValue = $(this).attr('data-filter');
                        // $('.isotope').css({'margin-top': '500px'});
                        $('.isotope').isotope({ filter: filterValue, itemSelector: '.grid-item' });
                    });
// change is-checked class on buttons
                    $('.button-group').each( function( i, buttonGroup ) {
                        var $buttonGroup = $( buttonGroup );
                        $buttonGroup.on( 'click', 'button', function() {
                            $buttonGroup.find('.active').removeClass('active');
                            $( this ).addClass('active');
                        });
                    });
                });
            }
        };
    }]);