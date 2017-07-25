(function () {

    angular
        .module('flacadaApp')
        .controller('scheduleCtrl', scheduleCtrl);

    scheduleCtrl.$inject = ['$location', '$scope', 'flacadaData', 'authentication', '$uibModal', '$window'];
    function scheduleCtrl($location, $scope, flacadaData, authentication, $uibModal, $window) {
        var vm = this;
        vm.pageHeader = 'Schedule';
        vm.isAdmin = authentication.isAdmin();
        vm.isLoggedIn = authentication.isLoggedIn();
        vm.message = ""
        vm.isRegularUser = !vm.isAdmin && vm.isLoggedIn; 


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
                    vm.message = "Unable to add session to my schedule";
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
                    $window.location.reload();
                })
                .error(function (e) {
                    console.log(e);
                });
        }

        vm.addGeneralSessionForm = function () {
            var uibModal = $uibModal.open({
                templateUrl: '/generalScheduleModal/generalScheduleModal.view.html',
                controller: 'generalScheduleModalCtrl as vm'

            });
            uibModal.result.then(function (data) {
                vm.data.sessions.push(data);
            })
        };


    };

})();
