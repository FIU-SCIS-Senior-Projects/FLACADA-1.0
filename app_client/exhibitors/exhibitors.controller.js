(function () {

    angular
        .module('flacadaApp')
        .controller('exhibitorsCtrl', exhibitorsCtrl);

    exhibitorsCtrl.$inject = ['$scope', 'flacadaData', '$uibModal', 'authentication'];
    function exhibitorsCtrl($scope, flacadaData, $uibModal, authentication) {
        var vm = this;
        vm.pageHeader = 'Exhibitors';
        vm.isAdmin = authentication.isAdmin();

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