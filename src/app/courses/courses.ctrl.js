(function () {
  'use strict';

  angular
    .module('courses')
    .controller('CoursesController', CoursesController);

  /* @ngInject */
  function CoursesController($injector) {
    var vm = this;
    vm.title = 'Controller';
    vm.courses = [];
    activate();

    ////////////////

    function activate() {
      viewAllCourses();
    }

    function viewAllCourses() {
      $injector.get('coursessvc')
        .fetchAllCourses()
        .then(function (resp) {
          vm.courses = resp;
        });
    }
  }
})();
