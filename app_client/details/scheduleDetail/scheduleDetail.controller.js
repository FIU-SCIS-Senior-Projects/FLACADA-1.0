(function () {

  angular
    .module('flacadaApp')
    .controller('scheduleDetailCtrl', scheduleDetailCtrl);

  scheduleDetailCtrl.$inject = ['$routeParams', 'flacadaData'];
  function scheduleDetailCtrl ($routeParams, flacadaData) {
    var vm = this;
    vm.sessionid = $routeParams.sessionid;

    flacadaData.sessionDetails(vm.sessionid)
      .success(function(data) {
        vm.data = { session: data };
        vm.pageHeader = vm.data.session.name
      })
      .error(function (e) {
        console.log(e);
      });


  };

})();