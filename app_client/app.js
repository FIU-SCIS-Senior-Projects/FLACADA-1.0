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
        templateUrl: '/locationDetail/locationDetail.view.html',
        controller: 'locationDetailCtrl',
        controllerAs: 'vm'
      })
      .when('/exhibitors/:exhibitorid', {
        templateUrl: '/locationDetail/locationDetail.view.html',
        controller: 'locationDetailCtrl',
        controllerAs: 'vm'
      })
      .otherwise({ redirectTo: '/' });
      $locationProvider.html5Mode(true);
  }

  angular
    .module('loc8rApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();