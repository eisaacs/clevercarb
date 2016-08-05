(function () {
    'use strict';

    angular
        .module('clevercarb.main.controller', [])
        .controller('mainController', mainController);

    mainController.$inject = ['$scope'];

    /* @ngInject */
    function mainController($scope){
    	console.log("main controller");

    	$scope.foo = "main";
    }

})();