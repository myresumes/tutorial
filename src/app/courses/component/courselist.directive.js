(function () {
  'use strict';

  angular
    .module('courses')
    .directive('courseList', courseList);

  /* @ngInject */
  function courseList() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      link: link,
      restrict: 'E',
      templateUrl: 'app/courses/component/courselist.tpl.html'

    };
    return directive;

    function link(scope, element, attrs) {}
  }

  /* @ngInject */
  function Controller() {

  }
})();
