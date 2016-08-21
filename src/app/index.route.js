(function() {
    'use strict';

    angular
        .module('tutorial')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        // $stateProvider
        //     .state('home', {
        //         url: '/home',
        //         templateUrl: 'app/main/main.html',
        //         controller: 'MainController',
        //         controllerAs: 'main'
        //     });

        $urlRouterProvider.otherwise('/login');
    }

})();
