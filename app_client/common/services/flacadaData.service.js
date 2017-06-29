(function () {

    angular
        .module('flacadaApp')
        .service('flacadaData', flacadaData);

    flacadaData.$inject = ['$http'];
    function flacadaData($http) {
        var sponsors = function () {
            return $http.get('/api/sponsors');
        };
        var sponsorDetails = function(sponsorid){
            return $http.get('/api/sponsors/' + sponsorid);
        };
        var speakers = function(){
            return $http.get('/api/speakers');
        };
        var sessions = function(){
            return $http.get('/api/sessions');
        }

        return {
            sponsors: sponsors,
            sponsorDetails: sponsorDetails,
            speakers: speakers,
            sessions: sessions,
        };
    }


})();