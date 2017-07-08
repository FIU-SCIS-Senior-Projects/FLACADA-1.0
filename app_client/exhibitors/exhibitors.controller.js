(function () {

    angular
        .module('flacadaApp')
        .controller('exhibitorsCtrl', exhibitorsCtrl);

    exhibitorsCtrl.$inject = ['$scope', 'flacadaData', '$uibModal'];
    function exhibitorsCtrl($scope, flacadaData, $uibModal) {
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

        vm.popupExhibitorForm = function () {
            var uibModal = $uibModal.open({
                templateUrl: '/exhibitorModal/exhibitorModal.view.html',
                controller: 'exhibitorModalCtrl as vm'
            });

            uibModal.result.then(function (data) {
                vm.data.exhibitors.push(data);
            })
        }

    }

})();