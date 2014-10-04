(function () {
	'use strict';

	var navbar = function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/navbar.html',
            scope: {},
            link: function postLink(scope, element, attrs) {

            }
        };
    };

	angular.module('butler')
	    .directive('navbar', navbar);

})();