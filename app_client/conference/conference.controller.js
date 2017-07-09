(function () {

  angular
    .module('flacadaApp')
    .controller('conferenceCtrl', conferenceCtrl);
  conferenceCtrl.$inject = ['$scope', 'flacadaData', 'authentication'];
  function conferenceCtrl($scope, flacadaData, authentication) {
    var vm = this;
    vm.pageHeader = 'FLACADA'
  

  vm.isLoggedIn = authentication.isLoggedIn();

  };
})();