(function () {

    angular
        .module('flacadaApp')
        .controller('exhibitorsCtrl', exhibitorsCtrl);

    exhibitorsCtrl.$inject = ['$scope', 'flacadaData'];
    function exhibitorsCtrl($scope, flacadaData) {
        var vm = this;
        vm.pageHeader = 'Exhibitors';


        flacadaData.exhibitors()
            .success(function (data) {
                vm.data = { exhibitors: data };
                console.log(vm.data);
            })
            .error(function (e) {
                console.log(e);
            });

    }

})();