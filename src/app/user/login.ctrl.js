(function () {
  'use strict';

  angular
    .module('user')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl($injector) {
    var vm = this;
    vm.title = 'Controller';
    vm.credentials = {
      userName: '',
      password: ''
    };
    vm.login = login;
    activate();

    ////////////////

    function activate() {}

    function login() {
      $injector.get('session')
        .login(vm.credentials)
        .then(function (user) {
          console.log(user);
          $injector.get('$state').go('dashbaord');
        });
      // $injector.get('$http')
      //     .post('/api/login', vm.credentials)
      //     .then(function(resp) {
      //         console.log(resp);
      //     }, function(error) {
      //         console.log(error);
      //     });
    }
  }
})();
