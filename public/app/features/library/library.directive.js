(function () {
    'use strict';

    angular
        .module('clevercarb.library.directive', [])
        .directive('library', library);

    library.$inject = ['$rootScope'];

    /* @ngInject */
    function library($rootScope) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/partials/food-data.html',
            link: function(scope, element, attrs) {
                console.log("library directive");
            }
        };
    }
})();