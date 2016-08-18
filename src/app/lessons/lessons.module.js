(function () {
  'use strict';

  angular
    .module('lessons', ['tutorial'])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('lessons', {
        url: 'lessons',
        templateUrl: 'app/lessons/lessons.tpl.html',
        controller: 'LessonsController as vm'
      })
  }
})();
