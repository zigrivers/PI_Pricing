angular.module('pricing', [ 'ngResource',
                            'ngRoute' ]);

angular.module('pricing')
    .config(function( $routeProvider, $locationProvider ) {
        $routeProvider
            .when('/', {
                templateURL  : 'partials/main',
                controller   : 'mainController'
//                controllerAs : 'main'
            });
        $locationProvider.html5Mode(true);
    });
