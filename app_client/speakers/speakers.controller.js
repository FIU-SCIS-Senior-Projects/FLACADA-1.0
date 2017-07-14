(function() {

  angular
    .module('flacadaApp')
    .controller('speakersCtrl', speakersCtrl);

  speakersCtrl.$inject = ['$location', '$scope', 'flacadaData', 'authentication', '$uibModal', '$window'];

  function speakersCtrl($location, $scope, flacadaData, authentication, $uibModal, $window) {
    var vm = this;
    vm.pageHeader = 'Speakers';
    vm.isAdmin = authentication.isAdmin();
    vm.isLoggedIn = authentication.isLoggedIn();
    vm.currentPath = $location.path();

    flacadaData.speakers()
      .success(function(data) {
        vm.data = {
          speakers: data
        };
        console.log(vm.data);
      })
      .error(function(e) {
        console.log(e);
      });


    vm.addSessionForm = function(speakerid) {
      console.log("speakerid " + speakerid)
      var uibModal = $uibModal.open({
        templateUrl: '/scheduleModal/scheduleModal.view.html',
        controller: 'scheduleModalCtrl as vm',
        resolve: {
          speakerData: function() {
            return {
              speakerid: speakerid
            };
          }
        }
      })

      uibModal.result.then(function(data) {
        vm.data.session.speaker.push(data);
      })
    }

    vm.delete = function(speakerid) {
      console.log(speakerid);
      flacadaData.deleteSpeaker(speakerid)
        .success(function(response) {
          console.log(response.data);
          $window.location.reload();
        })
        .error(function(e) {
          console.log(e);
        });
    };

    vm.deleteAll = function() {
      flacadaData.deleteAllSpeakers()
        .success(function(response) {
          console.log(response.data);
          $window.location.reload();
        })
        .error(function(e) {
          console.log(e);
        });
    }

    vm.addGeneralSpeakerForm = function () {
        var uibModal = $uibModal.open({
            templateUrl: '/generalSpeakerModal/generalSpeakerModal.view.html',
            controller: 'generalSpeakerModalCtrl as vm'
        });

        uibModal.result.then(function(data) {
            vm.data.speakers.push(data);
        })
    }

  };

})();
