(function() {
    'use strict';

    angular
        .module('dashboard', ['tutorial'])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('dashbaord', {
                url: '/dashboard',
                templateUrl: 'app/dashboard/dashboard.tpl.html',
                controller: 'DashboardCtrl as vm'
            });
    }
})();
