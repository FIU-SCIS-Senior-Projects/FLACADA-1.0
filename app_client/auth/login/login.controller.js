(function () {
    angular
        .module('flacadaApp')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$location', 'authentication'];
    function loginCtrl($location, authentication) {
        var vm = this;

        vm.pageHeader = 'Sign in to your FLACADA account';

        vm.credentials = {
            email: "",
            password: ""
        };

        vm.returnPage = $location.search().page || '/';

        vm.onSubmit = function () {
            vm.formError = "";
            if (!vm.credentials.email || !vm.credentials.password) {
                vm.formError = "All fields are required! Please try again!";
                return false;
            } else {
                vm.doLogin();
            }
        };

        vm.doLogin = function () {
            vm.formError = "";
            authentication
                .login(vm.credentials)
                .error(function (err) {
                    vm.formError = err;
                })
                .then(function () {
                    $location.search('page', null);
                    $location.path(vm.returnPage);
                });
        };
    }
})();