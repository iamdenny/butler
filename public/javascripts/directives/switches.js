(function () {
	'use strict';

	var switches = function ($timeout) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/switches.html',
            scope: {
                title: '@'
            },
            link: function postLink(scope, element, attrs) {
            }
        };
    };

	angular.module('butler')
	    .directive('switches', switches);

})();