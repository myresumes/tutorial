(function () {
  'use strict';

  angular
    .module('user', ['tutorial'])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        views: {
          '@': {
            templateUrl: 'app/user/login.tpl.html',
            controller: 'LoginCtrl as vm'
          }
        }

      });
  }
})();
