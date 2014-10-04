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

            }
        };
    };

	angular.module('butler')
	    .directive('uptime', uptime);

})();