(function () {

    angular
        .module('flacadaApp')
        .controller('exhibitorDetailCtrl', exhibitorDetailCtrl);

    exhibitorDetailCtrl.$inject = ['$routeParams', 'flacadaData'];
    function exhibitorDetailCtrl ($routeParams, flacadaData) {
        var vm = this;
        vm.exhibitorid = $routeParams.exhibitorid;

        flacadaData.exhibitorDetails(vm.exhibitorid)
            .success(function(data) {
                vm.data = { exhibitor: data };
                vm.pageHeader = {
                    title: vm.data.exhibitor.name
                };
            })
            .error(function (e) {
                console.log(e);
            });


    };

})();