(function () {

  angular
    .module('flacadaApp')
    .controller('conferenceCtrl', conferenceCtrl);

  function conferenceCtrl () {
    var vm = this;
    vm.pageHeader = 'FLACADA',
    vm.welcome = {
        title: 'WELCOME',
        bylaws: "http://www.flacada.org/wp-content/uploads/2016/10/FLACADA-Constitution-and-Bylaws.pdf",
        membership: "http://www.flacada.org/membership/"
      },
      vm.sociallinks ={
        title: 'SOCIAL MEDIA',
        facebook: "https://www.facebook.com/flnacada/",
        instagram: "https://www.instagram.com/flacada/",
        twitter: "https://twitter.com/FloridaNACADA/"
      },
      vm.sidebar = "Florida Academic Advising Association (FLACADA) is an organization of professionals from higher education institutions concerned with the personal and academic advising needs of students in Florida. The primary goals of FLACADA are to adhere to the NACADA core values of advising."
    }


})();