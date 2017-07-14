(function () {

    angular
        .module('flacadaApp')
        .controller('faqCtrl', faqCtrl);
    faqCtrl.$inject = ['$scope', 'authentication'];
    function faqCtrl($scope, authentication) {
        var vm = this;
        vm.isAdmin = authentication.isAdmin();
        vm.pageHeader = 'FAQ';
        vm.faqevents = [{
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