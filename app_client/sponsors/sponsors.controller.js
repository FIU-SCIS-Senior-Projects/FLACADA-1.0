(function () {

    angular
        .module('flacadaApp')
        .controller('sponsorsCtrl', sponsorsCtrl);

    sponsorsCtrl.$inject = ['$scope', 'flacadaData'];
    function sponsorsCtrl($scope, flacadaData) {
        var vm = this;
        vm.pageHeader = {
            title: 'FLACADA'
        };


        flacadaData.sponsors()
            .success(function (data) {
                vm.data = { sponsors: data };
                console.log(vm.data);
            })
            .error(function (e) {
                console.log(e);
            });

    }

})();