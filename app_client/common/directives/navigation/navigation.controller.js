/**
 * Created by ongoingbroom70 on 7/9/17.
 */
(function () {
    angular
        .module('flacadaApp')
        .controller('navigationCtrl', navigationCtrl);

    navigationCtrl.$inject = ['$location', 'authentication'];
    function navigationCtrl($location, authentication) {
        var vm = this;
        vm.currentPath = $location.path();

        vm.isLoggedIn = authentication.isLoggedIn();
        vm.currentUser = authentication.currentUser();

        vm.logout = function() {
            authentication.logout();
            $location.path('/');
        }
    }
})();