(function () {
    'use strict';

    angular
        .module('clevercarb.calculate.controller')
        .factory('calculateFactory', calculateFactory);

    function calculateFactory() {
        
    	var service = {
    		foo: fooMethod, 
    		bar: barMethod 
    	};

    	return service;

        function fooMethod() {
        	return "foo";
        }

        function barMethod() {
        	return "bar";
        }
    }
});