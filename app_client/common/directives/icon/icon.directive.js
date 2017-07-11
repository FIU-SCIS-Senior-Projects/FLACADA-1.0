(function () {
    angular
        .module('flacadaApp')
        .directive('icon', icon);
    function icon() {
        return {
            restrict: 'EA',
            templateUrl: '/common/directives/icon/icon.template.html'
        };
    }
})();