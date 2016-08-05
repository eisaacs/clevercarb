(function () {
    'use strict';

    angular
        .module('clevercarb.library.controller', [])
        .controller('libraryController', libraryController);

    libraryController.$inject = ['$scope'];

    /* @ngInject */
    function libraryController($scope){
    	console.log("library controller");
    }

})();