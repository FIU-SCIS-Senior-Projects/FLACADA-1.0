(function () {

  angular
    .module('flacadaApp')
    .controller('speakerDetailCtrl', speakerDetailCtrl);

  speakerDetailCtrl.$inject = ['$routeParams', 'flacadaData'];
  function speakerDetailCtrl ($routeParams, flacadaData) {
    var vm = this;
    vm.speakerid = $routeParams.speakerid;

    flacadaData.speakerDetails(vm.speakerid)
      .success(function(data) {
        vm.data = { speaker: data };
        vm.pageHeader = vm.data.speaker.firstName + " " + vm.data.speaker.lastName;
      })
      .error(function (e) {
        console.log(e);
      });


  };

})();