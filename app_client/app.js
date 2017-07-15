(function () {

    angular.module('flacadaApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap',]);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })

            .when('/conference', {
                templateUrl: '/conference/conference.view.html',
                controller: 'conferenceCtrl',
                controllerAs: 'vm'
            })
            .when('/exhibitors', {
                templateUrl: '/exhibitors/exhibitors.view.html',
                controller: 'exhibitorsCtrl',
                controllerAs: 'vm'
            })
            .when('/exhibitor/:exhibitorid', {
                templateUrl: '/details/exhibitorDetail/exhibitorDetail.view.html',
                controller: 'exhibitorDetailCtrl',
                controllerAs: 'vm'
            })
            .when('/sponsors', {
                templateUrl: '/sponsors/sponsors.view.html',
                controller: 'sponsorsCtrl',
                controllerAs: 'vm'
            })
            .when('/sponsor/:sponsorid', {
                templateUrl: '/details/sponsorDetail/sponsorDetail.view.html',
                controller: 'sponsorDetailCtrl',
                controllerAs: 'vm'
            })
            .when('/speakers', {
                templateUrl: '/speakers/speakers.view.html',
                controller: 'speakersCtrl',
                controllerAs: 'vm'
            })
            .when('/speakerFirst', {
                templateUrl: '/speakers/speakerfirst.view.html',
                controller: 'speakersCtrl',
                controllerAs: 'vm'
            })
            .when('/speakerInstitution', {
                templateUrl: '/speakers/speakerinstitution.view.html',
                controller: 'speakersCtrl',
                controllerAs: 'vm'
            })
            .when('/speaker/:speakerid', {
                templateUrl: '/details/speakerDetail/speakerDetail.view.html',
                controller: 'speakerDetailCtrl',
                controllerAs: 'vm'
            })
            .when('/schedule', {
                templateUrl: '/schedule/schedule.view.html',
                controller: 'scheduleCtrl',
                controllerAs: 'vm'
            })
            .when('/schedule/:sessionid', {
                templateUrl: '/details/scheduleDetail/scheduleDetail.view.html',
                controller: 'scheduleDetailCtrl',
                controllerAs: 'vm'
            })
            .when('/myschedule', {
                templateUrl: '/myschedule/myschedule.view.html',
                controller: 'myScheduleCtrl',
                controllerAs: 'vm'
            })
            .when('/register', {
                templateUrl: '/auth/register/register.view.html',
                controller: 'registerCtrl',
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl: '/auth/login/login.view.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
            .when('/local', {
                templateUrl: '/local/local.view.html',
                controller: 'localCtrl',
                controllerAs: 'vm'
            })
            .when('/faq', {
                templateUrl: '/faq/faq.view.html',
                controller: 'faqCtrl',
                controllerAs: 'vm'
            })
            .when('/wifi', {
                templateUrl: '/wifi/wifi.view.html',
                controller: 'wifiCtrl',
                controllerAs: 'vm'
            })
            .when('/maps', {
                templateUrl: '/maps/maps.view.html',
                controller: 'mapsCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
    }

    angular
        .module('flacadaApp')
        .config(['$routeProvider', '$locationProvider', config]);

})();