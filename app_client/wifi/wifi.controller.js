(function () {

    angular
        .module('flacadaApp')
        .controller('wifiCtrl', wifiCtrl);
    wifiCtrl.$inject = ['$scope', 'authentication'];
    function wifiCtrl($scope, authentication) {
        var vm = this;
        vm.isAdmin = authentication.isAdmin();
        vm.pageHeader = 'Wifi';
        vm.wifi = {
            
        };



    };

})();