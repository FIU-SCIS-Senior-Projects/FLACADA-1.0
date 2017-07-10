(function () {

  angular
    .module('flacadaApp')
    .controller('sponsorDetailCtrl', sponsorDetailCtrl);

  sponsorDetailCtrl.$inject = ['$routeParams', 'flacadaData'];
  function sponsorDetailCtrl ($routeParams, flacadaData) {
    var vm = this;
    vm.sponsorid = $routeParams.sponsorid;

    flacadaData.sponsorDetails(vm.sponsorid)
      .success(function(data) {
        vm.data = { sponsor: data };
        vm.pageHeader = vm.data.sponsor.name;
      })
      .error(function (e) {
        console.log(e);
      });


  };

})();