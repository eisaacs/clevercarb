(function () {
    'use strict';

    angular
        .module('clevercarb.log.controller', [])
        .controller('logController', logController);

    logController.$inject = ['$scope'];

    /* @ngInject */
    function logController($scope){
    	console.log("log controller");

    	$scope.foo = "log";
    }

})();