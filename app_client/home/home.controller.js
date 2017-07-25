(function () {

  angular
    .module('flacadaApp')
    .controller('homeCtrl', homeCtrl);
homeCtrl.$inject = ['$scope'];
  function homeCtrl($scope) {
    var vm = this;
    vm.oneAtATime = true;
vm.status = {
    isCustomHeaderOpen: false
  };
    vm.pageHeader = 'FLACADA';
    vm.welcome = {
      title: 'ABOUT US',
      bylaws: "http://www.flacada.org/wp-content/uploads/2016/10/FLACADA-Constitution-and-Bylaws.pdf",
      membership: "http://www.flacada.org/membership/"
    };
    vm.sociallinks = {
      title: 'SOCIAL MEDIA',
      facebook: "https://www.facebook.com/flnacada/",
      instagram: "https://www.instagram.com/flacada/",
      twitter: "https://twitter.com/FloridaNACADA/",
      youtube: " https://www.youtube.com/channel/UCaOScC1aDbI6z2N8NMjnrzw"
    };
    vm.sidebar = "Florida Academic Advising Association (FLACADA) is an organization of professionals from higher education institutions concerned with the personal and academic advising needs of students in Florida. The primary goals of FLACADA are to adhere to the NACADA core values of advising."


  };

})();