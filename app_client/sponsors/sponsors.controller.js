(function () {

    angular
        .module('flacadaApp')
        .controller('sponsorsCtrl', sponsorsCtrl);

    sponsorsCtrl.$inject = ['$location', '$scope', 'flacadaData', '$uibModal', 'authentication', '$window'];
    function sponsorsCtrl($location, $scope, flacadaData, $uibModal, authentication, $window) {
        var vm = this;
        vm.pageHeader = 'Sponsors';
        vm.isAdmin = authentication.isAdmin();
        vm.isLoggedIn = authentication.isLoggedIn();
        vm.currentPath = $location.path();

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

        vm.delete = function (sponsorid) {
            console.log(sponsorid);
            flacadaData.deleteSponsor(sponsorid)
                .success(function (response) {
                    console.log(response.data);
                     $window.location.reload();
                })
                .error(function (e) {
                    console.log(e);
                });
        };

        vm.deleteAll = function () {
            flacadaData.deleteAllSponsors () 
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