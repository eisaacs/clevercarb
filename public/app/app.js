(function () {
    'use strict';

    angular
    	.module('clevercarb', [
    		'ngRoute',
    		'clevercarb.main.controller',
    		'clevercarb.calculate.controller',
            'clevercarb.login.controller',
            'clevercarb.log.controller',
            'clevercarb.library.controller',
            'clevercarb.library.directive',
            'clevercarb.settings.controller'
    	]).config(configuration);

        configuration.$inject = ['$routeProvider', '$locationProvider'];
    	
    	/* @ngInject */
        function configuration($routeProvider, $locationProvider) {
        	$routeProvider
            .when('/', {
                templateUrl: 'app/features/index/main.html',
                controller: 'mainController'
            })
            .when('/login', {
		    	templateUrl: 'app/features/login/login.html',
		    	controller: 'loginController'
			})
			.when('/calculate', {
		    	templateUrl: 'app/features/calculate/calculate.html',
		    	controller: 'calculateController'
			})
			.when('/log', {
		    	templateUrl: 'app/features/log/log.html',
		    	controller: 'logController'
			})
            .when('/library', {
                templateUrl: 'app/features/library/library.html',
                controller: 'libraryController'
            })
            .when('/settings', {
                templateUrl: 'app/features/settings/settings.html',
                controller: 'settingsController'
            })
			.otherwise({
				redirectTo: '/'
			});
        	$locationProvider.html5Mode(true);
        }
})();