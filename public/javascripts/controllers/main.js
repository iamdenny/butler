(function () {
	'use strict';

	var mainCtrl = function ($scope, $timeout, butlerDao) {

		var loop;

    	$timeout(function () {
	 		loop();   		
    	}, 500);

    	loop = function () {
    		butlerDao.load(function (data) {
    			$scope.module1 = butlerDao.getLastStatusByName('거실');
    			$scope.module2 = butlerDao.getLastStatusByName('큰방');
    			$scope.butlerUptime = data.butlerUptime;
    		});
    		$timeout(loop, 10000);
    	};

    };

	angular.module('butler')
	    .controller('MainCtrl', mainCtrl);

})();