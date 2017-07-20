(function () {

    angular
        .module('flacadaApp')
        .controller('localCtrl', localCtrl);
    localCtrl.$inject = ['$scope', 'authentication', '$window'];
    function localCtrl($scope, authentication, $window) {
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
            location: 'Graham Center'
        },
        {
            name: 'Panda Express',
            location: 'MANGO'
        }]

// v3.1.0
//Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Miami, FL',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});



    };

})();