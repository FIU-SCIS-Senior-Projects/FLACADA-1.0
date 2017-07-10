(function () {

    angular
        .module('flacadaApp')
        .controller('scheduleCtrl', scheduleCtrl);

    scheduleCtrl.$inject = ['$scope', 'flacadaData', 'authentication', '$window'];
    function scheduleCtrl($scope, flacadaData, authentication, $window) {
        var vm = this;
        vm.pageHeader = 'Schedule';
        vm.isAdmin = authentication.isAdmin();
        vm.isLoggedIn = authentication.isLoggedIn();
        vm.message = ""
        

        flacadaData.sessions()
            .success(function (data) {
                vm.data = { sessions: data };
                console.log(vm.data);
            })
            .error(function (e) {
                console.log(e);
            });

        vm.delete = function (sessionid) {
            console.log(sessionid);
            flacadaData.deleteSession(sessionid)
                .success(function (response) {
                    console.log(response.data);
                    $window.location.reload();
                })
                .error(function (e) {
                    console.log(e);
                });
        };


        vm.addMySession = function (sessionid) {
            flacadaData.addMySession(sessionid)
                .success(function (response) {
                    console.log(response.data);
                    vm.message = "Successfully added to my schedule!"
                })
                .error(function (e) {
                   vm.formError = e;
                });

        }

    };

})();