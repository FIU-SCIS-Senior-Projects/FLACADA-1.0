(function () {

    angular
        .module('flacadaApp')
        .controller('sponsorsCtrl', sponsorsCtrl);

    sponsorsCtrl.$inject = ['$scope', 'flacadaData', '$uibModal'];
    function sponsorsCtrl($scope, flacadaData, $uibModal) {
        var vm = this;
        vm.pageHeader = 'Sponsors';


        flacadaData.sponsors()
            .success(function (data) {
                vm.data = { sponsors: data };
                console.log(vm.data);
            })
            .error(function (e) {
                console.log(e);
            });

        vm.popupSponsorForm = function () {
            var uibModal = $uibModal.open({
                templateUrl: '/sponsorModal/sponsorModal.view.html',
                controller: 'sponsorModalCtrl as vm'
            })

            uibModal.result.then(function (data) {
                vm.data.sponsors.push(data);
            })
        }
    }

})();