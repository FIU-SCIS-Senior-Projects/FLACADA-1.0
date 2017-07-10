(function () {

    angular
        .module('flacadaApp')
        .controller('myScheduleCtrl', myScheduleCtrl);

    myScheduleCtrl.$inject = ['$scope', 'flacadaData', 'authentication'];
    function myScheduleCtrl($scope, flacadaData, authentication) {
        var vm = this;
        vm.pageHeader = 'My schedule';

        vm.isLoggedIn = authentication.isLoggedIn();

        flacadaData.getMySessions()
            .success(function (data) {
                vm.data = { mysessions: data };
                console.log(vm.data);
            })
            .error(function (e) {
                console.log(e);
            });

        // vm.delete = function (sessionid) {
        //     console.log(sessionid);
        //     flacadaData.deleteSession(sessionid)
        //         .success(function (response) {
        //             console.log(response.data);
        //         })
        //         .error(function (e) {
        //             console.log(e);
        //         });
        // };

    };

})();