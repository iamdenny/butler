(function () {
	'use strict';

	var navbar = function ($timeout, $routeParams, $location) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directives/navbar.html',
            scope: {
            },
            link: function postLink(scope, element, attrs) {
                
                scope.resetPeriod = function () {
                    $timeout(function () {
                        scope.period = $routeParams.period;
                    });
                };
                
                scope.resetPeriod();
            }
        };
    };

	angular.module('butler')
	    .directive('navbar', navbar);

})();