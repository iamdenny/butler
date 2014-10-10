(function () {
	'use strict';

	var localTime = function ($timeout) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directives/local-time.html',
            scope: {
                title: '@'
            },
            link: function postLink(scope, element, attrs) {

                var pad, ticktock;

                $timeout(function () {
                    ticktock();
                    // Calling ticktock() every 1 second
                    setInterval(ticktock, 1000);
                });

                pad = function(x) {
                    return x < 10 ? '0'+x : x;
                };
                
                ticktock = function() {
                    var d = new Date();
                    var h = pad( d.getHours() );
                    var m = pad( d.getMinutes() );
                    var s = pad( d.getSeconds() );
                    
                    scope.currentTime = [h,m,s].join(':');
                    if (!scope.$$phase) {
                        scope.$digest();
                    }
                };
                
            }
        };
    };

	angular.module('butler')
	    .directive('localTime', localTime);

})();