(function () {
	'use strict';

	var realtimeStatusByModule = function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directives/realtime-status-by-module.html',
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
	    .directive('realtimeStatusByModule', realtimeStatusByModule);

})();