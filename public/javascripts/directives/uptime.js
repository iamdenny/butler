(function () {
	'use strict';

	var uptime = function ($timeout) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directives/uptime.html',
            scope: {
                title: '@',
                time: '@'
            },
            link: function postLink(scope, element, attrs) {
                var resetUptime = function (uptime) {
                    if (!angular.isNumber(uptime)) return;
                    var diffTime = moment().diff(uptime, 'minutes'),
                        dateString = '';
                    if (diffTime > 60 * 24) {
                        var days = (diffTime / (60 * 24));
                        dateString += days + '일';
                        diffTime -= days * 60 * 24;
                    }
                    if (diffTime > 60) {
                        var hours = (diffTime / 60);
                        dateString += hours + '시간';
                        diffTime -= hours * 60;
                    }
                    if (diffTime > 0) {
                        dateString += diffTime + '분';
                    }
                    scope.parsedTime = dateString;

                    $timeout(function() {
                        resetUptime(uptime);
                    }, 1000 * 60);
                };

                scope.$watch('time', function (newVal, oldVal) {
                    resetUptime(parseInt(newVal, 10));
                });
            }
        };
    };

	angular.module('butler')
	    .directive('uptime', uptime);

})();