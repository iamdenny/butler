(function () {
	'use strict';

	var SettingCtrl = function ($scope, $timeout, $routeParams, $location, $filter, butlerDao) {

		var isScanning;

		var scanBluetooth, loadFoundBluetooth;

		isScanning = false;

		scanBluetooth = function () {
			butlerDao.scanBluetooth(function (bluetoothModules) {
	        	$scope.bluetoothList = bluetoothModules.list;
	        	if (bluetoothModules.process === 'done') {
	        		isScanning = false;
	        	} else {
	        		$timeout(loadFoundBluetooth, 1000);
	        	}	        	
        	});
		};

		loadFoundBluetooth = function () {
			butlerDao.loadFoundBluetooth(function (bluetoothModules) {
	        	$scope.bluetoothList = bluetoothModules.list;
	        	if (bluetoothModules.process === 'done') {
	        		isScanning = false;
	        	} else {
	        		$timeout(loadFoundBluetooth, 1000);
	        	}	        	
        	});
		};

        $scope.scan = function () {
        	if (!isScanning) {
        		isScanning = true;
        		scanBluetooth();        	
	        }        	
        };

        $scope.connect = function (bluetooth) {
        	console.log('connect', bluetooth);
        };

    };

	angular.module('butler')
	    .controller('SettingCtrl', SettingCtrl);

})();