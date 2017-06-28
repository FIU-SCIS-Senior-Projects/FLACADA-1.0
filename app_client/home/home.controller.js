(function () {

  angular
    .module('flacadaApp')
    .controller('homeCtrl', homeCtrl);

  function homeCtrl () {
    var vm = this;
    vm.title = 'FLACADA',
    vm.gettingstarted = {
        title: 'Getting Started',
        bylaws: "http://www.flacada.org/wp-content/uploads/2016/10/FLACADA-Constitution-and-Bylaws.pdf",
        membership: "http://www.flacada.org/membership/"
      },
      vm.socialinks ={
        facebook: "https://www.facebook.com/flnacada/",
        instagram: "https://www.instagram.com/flacada/",
        twitter: "https://twitter.com/FloridaNACADA/"
      },
      vm.sidebar = "Florida Academic Advising Association (FLACADA) is an organization of professionals from higher education institutions concerned with the personal and academic advising needs of students in Florida. The primary goals of FLACADA are to adhere to the NACADA core values of advising."
    }


})();