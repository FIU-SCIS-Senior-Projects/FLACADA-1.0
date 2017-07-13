(function () {

    angular
        .module('flacadaApp')
        .controller('scheduleCtrl', scheduleCtrl);

    scheduleCtrl.$inject = ['$location', 'flacadaData', 'authentication', '$uibModal'];
    function scheduleCtrl($location, flacadaData, authentication, $uibModal) {
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

        vm.addSpeakerForm = function (sessionid) {
            console.log("sessionid " + sessionid)
            var uibModal = $uibModal.open({
                templateUrl: '/speakerModal/speakerModal.view.html',
                controller: 'speakerModalCtrl as vm',
                resolve: {
                    sessionData: function () {
                        return {
                            sessionid: sessionid
                        };
                    }
                }
            })

            uibModal.result.then(function (data) {
                vm.data.speaker.sessions.push(data);
            })
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

        };

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

        vm.deleteAll = function () {
            flacadaData.deleteAllSessions()
                .success(function (response) {
                    console.log(response.data);
                    vm.message = "Successfully added to my schedule!"
                })
                .error(function (e) {
                    console.log(e);
                });
        }


    };

})();
