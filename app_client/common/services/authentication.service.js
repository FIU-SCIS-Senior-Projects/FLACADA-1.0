(function () {

  angular
    .module('flacadaApp')
    .service('authentication', authentication);

  authentication.$inject = ['$http', '$window'];
  function authentication($http, $window) {

    var saveToken = function (token) {
      $window.localStorage['flacada-token'] = token;
    };

    var getToken = function () {
      return $window.localStorage['flacada-token'];
    };

    var isLoggedIn = function () {
      var token = getToken();

      if (token) {
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

    var currentUser = function () {
      if (isLoggedIn()) {
        var token = getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        return {
          email: payload.email,
          name: payload.name
        };
      }
    };

    var isAdmin = function () {
      if (isLoggedIn()) {
        var token = getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        if(payload.admin){return true}
        else {return false};
      }
    };

    register = function (user) {
      return $http.post('/api/register', user).success(function (data) {
        saveToken(data.token);
      });
    };

    login = function (user) {
      return $http.post('/api/login', user).success(function (data) {
        saveToken(data.token);
      });
    };

    logout = function () {
      $window.localStorage.removeItem('flacada-token');
    };

    return {
      currentUser: currentUser,
      saveToken: saveToken,
      getToken: getToken,
      isLoggedIn: isLoggedIn,
      register: register,
      login: login,
      logout: logout,
      isAdmin : isAdmin,
    };
  }


})();