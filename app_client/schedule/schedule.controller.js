(function () {

    angular
        .module('flacadaApp')
        .controller('scheduleCtrl', scheduleCtrl);

    scheduleCtrl.$inject = [ '$location','flacadaData', 'authentication','$uibModal', ];
    function scheduleCtrl( $location,flacadaData, authentication, $uibModal) {
        var vm = this;
        vm.pageHeader = 'Schedule';
        vm.isAdmin = authentication.isAdmin();
        vm.isLoggedIn = authentication.isLoggedIn();
        vm.sessionid - $routeParams.sessionid;
        vm.currentPath = $location.path();


        flacadaData.sessions()
            .success(function (data) {
                vm.data = { sessions: data };
                console.log(vm.data);
            })
            .error(function (e) {
                console.log(e);
            });

        vm.addSpeakerForm= function(sessionid) {
            console.log("sessionid " + sessionid)
            var uibModal = $uibModal.open({
                templateUrl: '/speakerModal/speakerModal.view.html',
                controller: 'speakerModalCtrl as vm',
                resolve : {
                    sessionData : function () {
                        return {
                            sessionid : sessionid
                        };
                    }
                }
            })

            // TODO: SPEAKER.SESSIONS OR SESSION.SPEAKER TRIED BOTH
            uibModal.result.then(function (data) {
                vm.data.speaker.sessions.push(data);
            })
        };

        vm.delete = function (sessionid) {
            console.log(sessionid);
            flacadaData.deleteSession(sessionid)
                .success(function (response) {
                    console.log(response.data);
                })
                .error(function (e) {
                    console.log(e);
                });
        };

    };

})();