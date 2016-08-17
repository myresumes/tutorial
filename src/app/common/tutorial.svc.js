(function() {
    'use strict';

    angular
        .module('tutorial')
        .factory('tutorialsvc', tutorialsvc);

    /* @ngInject */
    function tutorialsvc($injector) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {}
    }
})();
