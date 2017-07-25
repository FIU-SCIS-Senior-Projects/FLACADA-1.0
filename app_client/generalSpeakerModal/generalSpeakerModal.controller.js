(function () {
    angular
        .module('flacadaApp')
        .controller('generalSpeakerModalCtrl', generalSpeakerModalCtrl);
    generalSpeakerModalCtrl.$inject = ['$uibModalInstance', 'flacadaData'];
    function generalSpeakerModalCtrl($uibModalInstance, flacadaData) {
        var vm = this;

        vm.onSubmit = function () {
            vm.formError = "";
            if (!vm.formData.firstName || !vm.formData.lastName || !vm.formData.email || !vm.formData.title || !vm.formData.picture || !vm.formData.institution) {
                vm.formError = "All fields required, please try again";
            } else {
                vm.doAddSpeaker(vm.formData);

            }
        }

        // /speakers
        vm.doAddSpeaker = function (formData) {
            flacadaData.createSpeaker({
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
