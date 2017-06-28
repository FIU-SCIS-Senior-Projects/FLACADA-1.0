(function () {

    angular
        .module('flacadaApp')
        .controller('speakersCtrl', speakersCtrl);

    speakersCtrl.$inject = ['$scope', 'flacadaData'];
    function speakersCtrl($scope, flacadaData) {
        var vm = this;
        vm.pageHeader = {
            title: 'FLACADA'
        };


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