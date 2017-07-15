(function () {

    angular
        .module('flacadaApp')
        .controller('myscheduleCtrl', myscheduleCtrl);

    myscheduleCtrl.$inject = ['$scope', 'flacadaData', 'authentication', '$window'];
    function myscheduleCtrl($scope, flacadaData, authentication, $window) {
        var vm = this;
        vm.pageHeader = 'My schedule';
        vm.isLoggedIn = authentication.isLoggedIn();
        vm.sessionsExist = false;

        flacadaData.getMysessions()
            .success(function (data) {
                vm.data = { mysessions: data };
                console.log(vm.data);
            })
            .error(function (e) {
                console.log(e);
            });

        vm.deleteMysession = function (sessionid) {
            console.log(sessionid);
            flacadaData.deleteMysession(sessionid)
                .success(function (response) {
                    console.log(response.data);
                    $window.location.reload();
                })
                .error(function (e) {
                    console.log(e);
                });
        };

        vm.deleteAllMysessions = function(){
            flacadaData.deleteAllMysessions()
            .success(function(response){
                console.log(response.data);
                $window.location.reload();
            })
            .error(function(e){
                console.log(e);
            })
        }

    };

})();