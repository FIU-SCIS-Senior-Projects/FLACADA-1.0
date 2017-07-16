(function () {

    angular
        .module('flacadaApp')
        .controller('wifiCtrl', wifiCtrl);
    wifiCtrl.$inject = ['$scope', 'authentication'];
    function wifiCtrl($scope, authentication) {
        var vm = this;
        vm.isAdmin = authentication.isAdmin();
        vm.pageHeader = 'Wifi';
        vm.wifi = [{
            description: 'The information to log into the FIU wifi is:',
            username: 'Username = guest',
            password: 'Password = guest123' 
        }];



    };

})();