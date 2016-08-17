(function () {
  'use strict';

  angular
    .module('tutorial')
    .constant('userResolve', {
      currentUser: currentUser
    });

  /* @ngInject */
  function currentUser(session) {
    return session.getUser();
  }
})();
