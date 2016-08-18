(function () {
  'use strict';

  angular
    .module('lessons')
    .controller('LessonsController', LessonsController);

  /* @ngInject */
  function LessonsController($injector) {
    var vm = this;
    vm.title = 'Controller';

    activate();

    ////////////////

    function activate() {}
  }
})();
