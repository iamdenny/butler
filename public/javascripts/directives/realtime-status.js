(function () {
	'use strict';

	var realtimeStatus = function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/realtime-status.html',
            scope: {
                title: '@',
                temperature: '@',
                humidity: '@',
                light: '@',
                dust: '@'
            },
            link: function postLink(scope, element, attrs) {
                
            }
        };
    };

	angular.module('butler')
	    .directive('realtimeStatus', realtimeStatus);

})();