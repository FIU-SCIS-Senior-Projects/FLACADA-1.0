(function () {

    angular
        .module('flacadaApp')
        .controller('localCtrl', localCtrl);
    localCtrl.$inject = ['$scope', 'authentication'];
    function localCtrl($scope, authentication) {
        var vm = this;
        vm.isAdmin = authentication.isAdmin();
        vm.pageHeader = 'Local';
        vm.localevents = [{
            name: 'Try best brunches in Miami',
        }, {
            name: 'Find the best dinners in Miami'
        }];
        vm.dining = [{
            name: 'Chilis', 
            location:'Graham Center'
        },
    {
        name: 'Panda Express',
        location: 'MANGO'
    }]



    };

})();