(function () {
    'use strict';

    angular
        .module('clevercarb.settings.controller', [])
        .controller('settingsController', settingsController);

    settingsController.$inject = ['$scope'];

    /* @ngInject */
    function settingsController($scope){
    	console.log("settings controller");

    	$scope.foo = "settings";
    }

})();