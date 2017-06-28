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
        }

        return {
            sponsors: sponsors,
            sponsorDetails: sponsorDetails,
        };
    }


})();