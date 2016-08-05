(function () {
    'use strict';

    angular
        .module('clevercarb.login.controller', [])
        .controller('loginController', loginController);

    loginController.$inject = ['$scope'];

    /* @ngInject */
    function loginController($scope){
    	console.log("login controller");

    	$scope.foo = "login";
    }

})();