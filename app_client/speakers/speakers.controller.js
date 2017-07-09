(function () {

    angular
        .module('flacadaApp')
        .controller('speakersCtrl', speakersCtrl);

    speakersCtrl.$inject = ['$scope', 'flacadaData', 'authentication'];
    function speakersCtrl($scope, flacadaData, authentication) {
        var vm = this;
        vm.pageHeader = 'Speakers';
        vm.isAdmin = authentication.isAdmin();

        flacadaData.speakers()
            .success(function (data) {
                vm.data = { speakers: data };
                console.log(vm.data);
            })
            .error(function (e) {
                console.log(e);
            });

    }

})();