(function () {

    angular
        .module('flacadaApp')
        .service('flacadaData', flacadaData);

    flacadaData.$inject = ['$http', 'authentication'];
    function flacadaData($http, authentication) {
        var sponsors = function () {
            return $http.get('/api/sponsors');
        };
        var sponsorDetails = function (sponsorid) {
            return $http.get('/api/sponsors/' + sponsorid);
        };
        var exhibitors = function () {
            return $http.get('/api/exhibitors');
        };
        var exhibitorDetails = function (exhibitorid) {
            return $http.get('/api/exhibitors/' + exhibitorid);
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
        var deleteSession = function (sessionid) {
            return $http.delete('/api/sessions/' + sessionid, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var deleteSpeaker = function (speakerid) {
            return $http.delete('/api/speakers/' + speakerid, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var deleteSponsor = function (sponsorid) {
            return $http.delete('/api/sponsors/' + sponsorid, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var deleteExhibitor = function (exhibitorid) {
            return $http.delete('/api/exhibitors/' + exhibitorid, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var addSponsor = function (data) {
            return $http.post('/api/sponsors', data, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var addExhibitor = function (data) {
            return $http.post('/api/exhibitors', data, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var addSession = function (speakerid, data) {
            return $http.post('/api/speakers/' + speakerid + '/sessions', data, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var addSpeaker = function (sessionid, data) {
            return $http.post('/api/sessions/' + sessionid + '/speakers', data, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };
        var getMySessions = function () {
            return $http.get('/api/mysessions', {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var addMySession = function (sessionid) {
            return $http.post('/api/mysessions/' + sessionid, null, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var deleteAllMySessions = function () {
            return $http.delete('/api/mysessions', {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var deleteMySession = function (sessionid) {
            return $http.delete('/api/mysessions/' + sessionid,  {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var deleteAllExhibitors = function (){
            return $http.delete('/api/exhibitors', {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var deleteAllSponsors = function (){
            return $http.delete('/api/sponsors', {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var deleteAllSpeakers = function (){
            return $http.delete('/api/speakers', {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var deleteAllSessions = function (){
            return $http.delete('/api/sessions', {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var createSpeaker = function (data) {
            return $http.post('/api/speakers',data, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        var createSession = function (data) {
            return $http.post('/api/sessions',data, {
                headers: {
                    Authorization: 'Bearer ' + authentication.getToken()
                }
            });
        };

        return {
            sponsors: sponsors,
            sponsorDetails: sponsorDetails,
            exhibitors: exhibitors,
            exhibitorDetails: exhibitorDetails,
            speakers: speakers,
            sessions: sessions,
            speakerDetails: speakerDetails,
            sessionDetails: sessionDetails,
            deleteSession: deleteSession,
            deleteSpeaker: deleteSpeaker,
            deleteSponsor: deleteSponsor,
            deleteExhibitor: deleteExhibitor,
            addSponsor: addSponsor,
            addExhibitor: addExhibitor,
            addSession: addSession,
            addSpeaker: addSpeaker,
            getMySessions : getMySessions,
            addMySession : addMySession,
            deleteMySession : deleteMySession,
            deleteAllMySessions : deleteAllMySessions,
            deleteAllExhibitors : deleteAllExhibitors,
            deleteAllSponsors : deleteAllSponsors,
            deleteAllSpeakers : deleteAllSpeakers, 
            deleteAllSessions : deleteAllSessions,
            getMySessions: getMySessions,
            addMySession: addMySession,
            deleteAllSessions: deleteAllSessions,
            createSpeaker : createSpeaker,
            createSession : createSession
        };
    }


})();