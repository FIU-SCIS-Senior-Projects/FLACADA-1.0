(function () {
    angular
        .module('flacadaApp')
        .controller('speakerModalCtrl', speakerModalCtrl);
    speakerModalCtrl.$inject = ['$uibModalInstance', 'flacadaData', 'sessionData'];
    function speakerModalCtrl($uibModalInstance, flacadaData, sessionData) {
        var vm = this;
        vm.sessionData = sessionData;

        vm.onSubmit = function () {
            vm.formError = "";
            if (!vm.formData.firstName || !vm.formData.lastName || !vm.formData.email || !vm.formData.title || !vm.formData.picture || !vm.formData.institution) {
                vm.formError = "All fields required, please try again";
            } else {
                vm.doAddSpeaker(vm.sessionData.sessionid, vm.formData);

            }
        }

        ///sessions/:sessionid/speakers
        vm.doAddSpeaker = function (sessionid, formData) {
            flacadaData.addSpeaker(sessionid, {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                title: formData.title,
                picture: formData.picture,
                institution: formData.institution
            })
                .success(function (data) {
                    vm.modal.close(data);
                })
                .error(function (data) {
                    console.log(data);
                });
            return false;
        }

        vm.modal = {
            close: function (result) {
                $uibModalInstance.close(result);
            },
            cancel: function () {
                $uibModalInstance.dismiss('cancel');
            }
        };
    };
})();
