(function () {

    angular.module('flacadaApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .when('/exhibitors', {
                templateUrl: '/exhibitors/exhibitors.view.html',
                controller: 'exhibitorsCtrl',
                controllerAs: 'vm'
            })
            .when('/exhibitors/:exhibitorid', {
                templateUrl: '/details/exhibitorDetail.view.html',
                controller: 'exhibitorDetailCtrl',
                controllerAs: 'vm'
            })
            .when('/sponsors', {
                templateUrl: '/sponsors/sponsors.view.html',
                controller: 'sponsorsCtrl',
                controllerAs: 'vm'
            })
            .when('/sponsors/:sponsorid', {
                templateUrl: '/details/sponsorDetail.view.html',
                controller: 'sponsorDetailCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
    }

    angular
        .module('flacadaApp')
        .config(['$routeProvider', '$locationProvider', config]);

})();