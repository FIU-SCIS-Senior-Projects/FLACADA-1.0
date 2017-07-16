(function () {
    angular
        .module('flacadaApp')
        .controller('generalScheduleModalCtrl', generalScheduleModalCtrl);
    generalScheduleModalCtrl.$inject = ['$uibModalInstance', 'flacadaData'];
    function generalScheduleModalCtrl($uibModalInstance, flacadaData) {
        var vm = this;


        vm.onSubmit = function () {
            vm.formError = "";
            if (!vm.formData.name || !vm.formData.startTime || !vm.formData.endTime || !vm.formData.location || !vm.formData.description) {
                vm.formError = "All fields required, please try again";
            } else {
                vm.doAddSession(vm.formData);

            }
        }

        // /sessions
        vm.doAddSession = function (formData) {
            flacadaData.createSession({
                name: formData.name,
                startTime: formData.startTime,
                endTime: formData.endTime,
                location: formData.location,
                description: formData.description
            })
                .success(function (data) {
                    vm.modal.close(data);
                })
                .error(function (data) {
                    console.log(data);
                });
            return false;
        };

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
