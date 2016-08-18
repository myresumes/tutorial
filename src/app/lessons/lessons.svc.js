(function () {
  'use strict';

  angular
    .module('lessons')
    .factory('lessonsSvc', lessonsSvc);

  /* @ngInject */
  function factory($injector) {
    var service = {
      func: func
    };
    return service;

    ////////////////

    function func() {}
  }
})();
