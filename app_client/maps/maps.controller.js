(function () {

    angular
        .module('flacadaApp')
        .controller('mapsCtrl', mapsCtrl);
    mapsCtrl.$inject = ['$scope', 'authentication'];
    function mapsCtrl($scope, authentication) {
        var vm = this;
        vm.isAdmin = authentication.isAdmin();
        vm.pageHeader = 'Maps';
        vm.mmcmap = '/images/mmc-campus-map.jpg';



    };

})();