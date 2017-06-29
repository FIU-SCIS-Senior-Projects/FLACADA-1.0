(function () {

    angular
        .module('flacadaApp')
        .service('flacadaData', flacadaData);

    flacadaData.$inject = ['$http'];
    function flacadaData($http) {
        var sponsors = function () {
            return $http.get('/api/sponsors');
        };
        var sponsorDetails = function (sponsorid) {
            return $http.get('/api/sponsors/' + sponsorid);
        };
        var speakers = function () {
            return $http.get('/api/speakers');
        };
        var speakerDetails = function (speakerid) {
            return $http.get('/api/speakers/' + speakerid);
        };
        var sessions = function () {
            return $http.get('/api/sessions');
        };
        var sessionDetails = function (sessionid) {
            return $http.get('/api/sessions/' + sessionid);
        };
        var deleteSession = function(sessionid){
            return $http.delete('/api/sessions/' + sessionid);
        }

        return {
            sponsors: sponsors,
            sponsorDetails: sponsorDetails,
            speakers: speakers,
            sessions: sessions,
            speakerDetails: speakerDetails,
            sessionDetails: sessionDetails,
            deleteSession : deleteSession,
        };
    }


})();