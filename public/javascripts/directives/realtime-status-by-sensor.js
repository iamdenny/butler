(function () {
	'use strict';

	var realtimeStatusBySensor = function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directives/realtime-status-by-sensor.html',
            scope: {
                title: '@',
                data: '=',
                prefix: '@'
            },
            link: function postLink(scope, element, attrs) {
                
            }
        };
    };

	angular.module('butler')
	    .directive('realtimeStatusBySensor', realtimeStatusBySensor);

})();