(function () {
  'use strict';

  angular
    .module('tutorial')
    .factory('tutorialsvc', tutorialsvc);

  /* @ngInject */
  function tutorialsvc($injector, $q) {
    var service = {
        getAllEntity: getAllEntity
      },
      entities = {
        allCourses: 'course/all'
      };
    return service;

    ////////////////


    function getAllEntity(req) {
      return $injector.get('$http')
        .get(apiUrl(req.key))
        .then(function (resp) {
          if (resp) {
            if (resp.data !== null && !resp.Error) {
              return $q.when(resp.data);
            }
          }
          return $q.reject({
            error: resp.data.Message
          })
        }, function (error) {
          return $q.reject({
            error: 'Problem Encountered While Perfroming Specified Action'
          })
        });
    }

    function apiUrl(key) {
      return '/api/' + entities[key];
    }
  }
})();
