(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

  /* @ngInject */
  function DashboardCtrl($injector) {
    var vm = this;
    vm.title = 'Controller';

    activate();

    ////////////////

    function activate() {}
  }
})();
