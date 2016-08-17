(function() {
    'use strict';

    angular
        .module('tutorial')
        .factory('authInterceptor', authInterceptor)
        .config(['$httpProvider',
            function($httpProvider) {
                $httpProvider.interceptors.push('authInterceptor');
            }
        ]);

    /* @ngInject */
    function authInterceptor($log, $window, $q, $injector, appConfig) {
        var service = {
            request: request,
            responseError: error
        };
        return service;

        ////////////////

        function request(config) {
            //      console.log(1);
            //TODO : Solve circular reference issue
            //var token = session.getToken;
            var firstWord = getFirstWord(config.url),
                token;
            if (firstWord === null) {
                return config;
            }
            if (firstWord && angular.isDefined(appConfig[firstWord]) && appConfig.mappedTo) {
                config.url = appConfig.mappedTo + config.url;
            }
            token = $window.sessionStorage.token;
            config.headers = config.headers || {};
            if (angular.isDefined(token) && token !== 'undefined') {
                config.headers.Authorization = token;
            }
            return config;
        }

        function error(response) {
            if (response.status === -1 || response.data === null) {
                throw Error('Error connecting to server : Please check your internet connection');
            }
            if (isSessionExpired(response)) {
                //console.log('Session Expired : ' + response.data);
                delete $window.sessionStorage.token;
                // Using $state as a dependency causes Circular Dependency - So having $injector to find $state for us
                $injector.get('$state').transitionTo('anon.login');
                return 'Session Expired! Please login again.';
            }
            return response;
        }

        function isSessionExpired(res) {
            if (res.status === 401) {
                return true;
            }
            if (res.data && res.data !== null && !angular.isString(res.data)) {
                return false;
            }
            if (res.config.method === 'POST' && angular.isString(res.data) && res.data.indexOf('Session Expired') > -1) {
                return true;
            }
            return false;
        }

        function getFirstWord(url) {
            var firstWord = null;
            if (url.indexOf('/', 1) > -1) {
                firstWord = url.substring(0, url.indexOf('/', 1));
            }
            if (firstWord !== null && firstWord.indexOf('/') === 0) {
                return firstWord.substring(1);
            } else {
                return firstWord;
            }
        }
    }
})();
