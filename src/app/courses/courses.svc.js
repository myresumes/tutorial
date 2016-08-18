(function () {
  'use strict';

  angular
    .module('courses')
    .factory('coursessvc', coursessvc);

  /* @ngInject */
  function coursessvc($injector, _) {
    var service = {
        fetchAllCourses: fetchAllCourses
      },
      tutorialSvc = $injector.get('tutorialsvc'),
      $q = $injector.get('$q');
    return service;

    ////////////////

    function fetchAllCourses() {
      return tutorialSvc.getAllEntity({
        key: 'allCourses'
      }).then(function (resp) {
        if (resp && _.has(resp, 'courses')) {
          return $q.when(resp.courses);
        }
        console.log('Error Message');
        return $q.reject();
      }, function (error) {
        console.log(error);
        return $q.reject();
      });
    }
  }
})();
