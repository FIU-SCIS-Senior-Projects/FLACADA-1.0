(function () {
    angular
        .module('flacadaApp')
        .controller('scheduleModalCtrl', scheduleModalCtrl);
    scheduleModalCtrl.$inject = ['$uibModalInstance', 'flacadaData', 'speakerData'];
    function scheduleModalCtrl($uibModalInstance, flacadaData, speakerData) {
        var vm = this;
        vm.speakerData = speakerData;

        vm.onSubmit = function () {
            vm.formError = "";
            if (!vm.formData.name || !vm.formData.startTime || !vm.formData.endTime || !vm.formData.location || !vm.formData.description) {
                vm.formError = "All fields required, please try again";
            } else {
                vm.doAddSession(vm.speakerData.speakerid, vm.formData);

            }
        }

        ////speakers/:speakerid/sessions
        vm.doAddSession = function (speakerid, formData) {
            flacadaData.addSession(speakerid, {
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
