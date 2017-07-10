/**
 * Created by ongoingbroom70 on 7/8/17.
 */
(function () {

    angular
        .module('flacadaApp')
        .controller('sponsorModalCtrl',sponsorModalCtrl);

    sponsorModalCtrl.$inject = ['$uibModalInstance', 'flacadaData'];

    function sponsorModalCtrl ($uibModalInstance, flacadaData) {
        var vm = this;

        vm.onSubmit = function () {
            vm.formError = "";
            if(!vm.formData.name || !vm.formData.image || !vm.formData.website || !vm.formData.description) {
                vm.formError = "All fields required, please try again";
            } else {
                vm.doAddSponsor(vm.formData);
            }
        }

        vm.doAddSponsor =  function (formData) {
            flacadaData.addSponsor({
                name: formData.name,
                image: formData.image,
                website: formData.website,
                description: formData.description
            })
                .success(function (data) {
                    vm.modal.close(data);
                })
                .error(function (data) {
                    vm.formError = "Your review has not been saved, please try again";
                });
            return false;
        };

        vm.modal = {
            close : function (result) {
                $uibModalInstance.close(result);
            },
            cancel : function () {
                $uibModalInstance.dismiss('cancel');
            }
        };
    };




})();