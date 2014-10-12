(function () {
	'use strict';

	var toggleChartBySensor = function ($timeout) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directives/toggle-chart-by-sensor.html',
            scope: {
                title: '@',
                timetable: '=',
                data: '=',
                prefix: '@'
            },
            link: function postLink(scope, element, attrs) {
                
                scope.showRealtime = false;

                scope.$watch('data', function (newVal) {
                    scope.lastData = [];
                    for (var k in newVal) {
                        scope.lastData.push({
                            name: k,
                            value : newVal[k][newVal[k].length-1]
                        });
                    }
                });
                
            }
        };
    };

	angular.module('butler')
	    .directive('toggleChartBySensor', toggleChartBySensor);

})();