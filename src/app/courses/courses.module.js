(function () {
  'use strict';

  angular
    .module('courses', ['tutorial'])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('courses', {
        url: '/courses',
        templateUrl: 'app/courses/courses.tpl.html',
        controller: 'CoursesController as vm'
      });
  }
})();
