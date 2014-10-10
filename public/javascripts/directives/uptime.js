(function () {
	'use strict';

	var uptime = function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directives/uptime.html',
            scope: {
                title: '@',
                time: '@'
            },
            link: function postLink(scope, element, attrs) {
                scope.$watch('time', function (newVal, oldVal) {
                    scope.parsedTime = moment.duration( Date.now() - newVal, "milliseconds").humanize();
                });
            }
        };
    };

	angular.module('butler')
	    .directive('uptime', uptime);

})();