(function () {
	'use strict';

	var toggleDonutStackedArea = function ($timeout) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directives/toggle-donut-stacked-area.html',
            scope: {
                title: '@',
                timetable: '=',
                data: '='
            },
            link: function postLink(scope, element, attrs) {
                
                scope.showRealtime = false;

                scope.$watch('data', function (newVal) {
                    scope.lastData = {}
                    for (var k in newVal) {
                        scope.lastData[k] = newVal[k][newVal[k].length-1];
                    }
                });
            }
        };
    };

	angular.module('butler')
	    .directive('toggleDonutStackedArea', toggleDonutStackedArea);

})();