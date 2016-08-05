(function () {
    'use strict';

    angular
        .module('clevercarb.calculate.controller', [])
        .controller('calculateController', calculateController);

    calculateController.$inject = ['$scope'];

    /* @ngInject */
    function calculateController($scope){
        console.log("calculate controller");
        var nav = ['glucoseLevel', 'selectShape', 'weight', 'scale', 'food', 'calculating', 'results'];

        $scope.current = nav[0];
        $scope.glucoseLevel = undefined;
        $scope.shape = undefined;
        $scope.weight = 0;
        $scope.attached = false;
        $scope.food = undefined;
        $scope.insulin = undefined;
        $scope.carbs = undefined;

        $scope.next = function ($event) {
            if ($event !== undefined && $event.target.className === 'shape') {
                $scope.shape = $event.target.id;
            } 
            var index = nav.indexOf($scope.current);
            $scope.current = nav[++index];
        }

        $scope.prev = function () {
            var index = nav.indexOf($scope.current);
            if (index >= 1) {
                $scope.current = nav[--index];
            } else {
                window.location = "/";
            }
        }
    }

})();