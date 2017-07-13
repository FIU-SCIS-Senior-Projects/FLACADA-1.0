(function () {

    angular
        .module('flacadaApp')
        .controller('exhibitorsCtrl', exhibitorsCtrl);

    exhibitorsCtrl.$inject = ['$location', '$scope', 'flacadaData', '$uibModal', 'authentication', '$window'];
    function exhibitorsCtrl($location, $scope, flacadaData, $uibModal, authentication, $window) {
        var vm = this;
        vm.pageHeader = 'Exhibitors';
        vm.isAdmin = authentication.isAdmin();
        vm.isLoggedIn = authentication.isLoggedIn();
        vm.currentPath = $location.path();

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

        vm.delete = function (exhibitorid) {
            console.log(exhibitorid);
            flacadaData.deleteExhibitor(exhibitorid)
                .success(function (response) {
                    console.log(response.data);
                     $window.location.reload();
                })
                .error(function (e) {
                    console.log(e);
                });
        };

        vm.deleteAll = function () {
            flacadaData.deleteAllExhibitors () 
                .success(function (response) {
                    console.log(response.data);
                     $window.location.reload();
                })
                .error(function (e) {
                    console.log(e);
                });
            }

    }

})();