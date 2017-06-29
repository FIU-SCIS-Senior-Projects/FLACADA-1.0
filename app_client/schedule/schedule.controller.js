(function () {

    angular
        .module('flacadaApp')
        .controller('scheduleCtrl', scheduleCtrl);

    scheduleCtrl.$inject = ['$scope', 'flacadaData'];
    function scheduleCtrl($scope, flacadaData) {
        var vm = this;
        vm.pageHeader = 'Schedule';


        flacadaData.sessions()
            .success(function (data) {
                vm.data = { sessions: data };
                console.log(vm.data);
            })
            .error(function (e) {
                console.log(e);
            });

    }

})();