(function () {

    angular
        .module('flacadaApp')
        .controller('faqCtrl', faqCtrl);
    faqCtrl.$inject = ['$scope', 'authentication'];
    function faqCtrl($scope, authentication) {
        var vm = this;
        vm.isAdmin = authentication.isAdmin();
        vm.pageHeader = 'FAQ';
        vm.faq = [{
            number: '1',
            question: 'Do I need an account to create a schedule?',
            answer: 'Yes'
        }, {
            number: '2',
            question: 'Where can I see my schedule?',
            answer: 'There is a link called "my schedule" on the conference page once you sign up for an account'
        }];



    };

})();
