(function () {
  'use strict';

  angular
    .module('tutorial')
    .factory('session', session);

  /* @ngInject */
  function session($injector) {
    var service = {
        login: login,
        getUser: getUser,
        getUserId: getUserId,
        getUserName: getUserName,
        getUserEmail: getUserEmail,
        hasRoles: hasRoles
      },
      user, $q = $injector.get('$q'),
      $window = $injector.get('$window');
    return service;

    ////////////////

    function login(credentials) {
      return $injector.get('$http')
        .post('api/login', credentials)
        .then(function (resp) {
          if (resp && resp.status === 200) {
            return resp.data;
          }
        })
        .then(function (svcData) {
          if (_.has(svcData, 'Error') && !svcData.Error) {
            user = svcData.result;
            setUserName(user.fullName);
            setUserId(user.id);
            // setTenantId(user.tenantId);
            setUserRole(user.profileType);
            setUserEmail(user.email);
            return $q.when(svcData.result);
          }
        })
        .catch(function (error) {
          return $q.reject({
            error: error.Message
          });
        });
    }

    //Need descriptive Implementation
    function getUser() {
      return $q.when(user);
    }

    function setUserRoles(roles) {
      $window.sessionStorage.roles = roles;
    }

    function setUserId(userId) {
      $window.sessionStorage.userId = userId;
    }

    function getUserId() {
      return $window.sessionStorage.userId;
    }

    function setUserName(userName) {
      $window.sessionStorage.userName = userName;
    }

    function getUserName() {
      return $window.sessionStorage.userName;
    }

    function setUserEmail(email) {
      $window.sessionStorage.userEmail = email;
    }

    function getUserEmail() {
      return $window.sessionStorage.userEmail;
    }

    function hasRoles(roles) {
      return $window.sessionStorage.roles;
    }


  }
})();
