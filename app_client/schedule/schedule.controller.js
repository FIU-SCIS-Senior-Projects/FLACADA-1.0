(function () {

    angular
        .module('flacadaApp')
        .controller('scheduleCtrl', scheduleCtrl);

    scheduleCtrl.$inject = ['$location','flacadaData', 'authentication','$uibModal', '$routeParams'];
    function scheduleCtrl($location,flacadaData, authentication, $uibModal, $routeParams) {
        var vm = this;
        vm.pageHeader = 'Schedule';
        vm.isAdmin = authentication.isAdmin();
        vm.isLoggedIn = authentication.isLoggedIn();
        vm.sessionid - $routeParams.sessionid;
        vm.currentPath = $location.path();
        vm.sessionid = $routeParams.sessionid;

        flacadaData.sessions()
            .success(function (data) {
                vm.data = { sessions: data };
                console.log(vm.data);
            })
            .error(function (e) {
                console.log(e);
            });

        vm.addSpeakerForm= function() {
            var uibModal = $uibModal.open({
                templateUrl: '/speakerModal/speakerModal.view.html',
                controller: 'speakerModalCtrl as vm',
                resolve : {
                    sessionData : function () {
                        return {
                            sessionid : vm.sessionid
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