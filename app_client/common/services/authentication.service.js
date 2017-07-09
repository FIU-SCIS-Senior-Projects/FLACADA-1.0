/**
 * Created by ongoingbroom70 on 7/8/17.
 */
(function () {
    angular
        .module('flacadaApp')
        .service('authentication', authentication);
    authentication.$inject = ['$window', '$http'];
    function authentication($window, $http) {

        var saveToken = function (token) {
            $window.localStorage['flacada-token'] = token;
        };

        var getToken = function () {
            return $window.localStorage['flacada-token'];
        };

        register = (function (user) {
            return $http.post('/api/register', user).success(function (data) {
                saveToken(data.token);
            });
        });

        login = function (user) {
            return $http.post('/api/login', user).success(function (data) {
                saveToken(data.token);
            })
        };

        logout = function () {
            $window.localStorage.removeItem('flacada-token');
        };

        var isLoggedIn = function () {
            var token = getToken();

            if(token) {
                var payload = JSON.parse($window.atob(token.split('.')[1]));

                return payload.exp > Date.now() / 1000;
            } else {
                return false;
            }
        };

        var currentUser = function () {
            if(isLoggedIn()) {
                var token = getToken();
                var payload = JSON.parse($window.atob(token.split('.')[1]));
                return {
                    email : payload.email,
                    name : payload.name
                };
            }
         };

        return {
            saveToken : saveToken,
            getToken : getToken,
            register : register,
            logout : logout,
            isLoggedIn : isLoggedIn,
            currentUser : currentUser
        }
    }
}) ();