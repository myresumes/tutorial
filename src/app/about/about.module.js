(function() {
    'use strict';

    angular
        .module('about', [
            'user'
        ]).config(config);

    function config($stateProvider) {
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.tpl.html'
            });
    }
})();
