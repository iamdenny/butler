(function () {
	'use strict';

	var footbar = function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directives/footbar.html',
            scope: {},
            link: function postLink(scope, element, attrs) {

            }
        };
    };

	angular.module('butler')
	    .directive('footbar', footbar);

})();