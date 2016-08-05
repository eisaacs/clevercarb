(function () {
    'use strict';

    angular
        .module('clevercarb.calculate.directive', ['clevercarb.calculate.controller'])
        .directive('calculate', calculate);

    calculate.$inject = ['$rootScope', 'calculateController'];

    /* @ngInject */
    function calculate($rootScope, calculateController) {
        return {
            restrict: 'E',
            scope: {},
            link: function(scope, element, attrs) {
                console.log("calculate directive");
            }
        };
    }
})();