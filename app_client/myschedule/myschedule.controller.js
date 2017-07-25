(function () {

    angular
        .module('flacadaApp')
        .controller('myScheduleCtrl', myScheduleCtrl);

    myScheduleCtrl.$inject = ['$scope', 'flacadaData', 'authentication', '$window'];
    function myScheduleCtrl($scope, flacadaData, authentication, $window) {
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

        vm.deleteMySession = function (sessionid) {
            console.log(sessionid);
            flacadaData.deleteMySession(sessionid)
                .success(function (response) {
                    console.log(response.data);
                    $window.location.reload();
                })
                .error(function (e) {
                    console.log(e);
                });
        };

        vm.deleteAllMySessions = function(){
            flacadaData.deleteAllMySessions()
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