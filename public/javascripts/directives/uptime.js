(function () {
	'use strict';

	var uptime = function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/uptime.html',
            scope: {
                title: '@',
                time: '@'
            },
            link: function postLink(scope, element, attrs) {
                scope.$watch('time', function (newVal, oldVal) {
                    scope.parsedTime = moment(parseInt(newVal, 10)).fromNow();
                });
            }
        };
    };

	angular.module('butler')
	    .directive('uptime', uptime);

})();