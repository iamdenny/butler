(function () {
	'use strict';

	var butlerDao = function ($http) {

		// initialize variables
		var data;

		// initialize variables of methods
		var load, getLastStatusByName, scanBluetooth, loadFoundBluetooth;

		load = function (period, cb) {
			$http.get('/ajax/data/' + period).success(function(originalData) {
		      data = originalData;
		      console.log('data', originalData);
		      cb(originalData);
		    });
		};

		getLastStatusByName = function (name) {
			if (!data) return {};
			for(var k in data.modules) {
				if (data.modules[k].name === name) {
					return {
						name: name,
						temperature: data.modules[k].temperature[data.modules[k].temperature.length -1],
						humidity: data.modules[k].humidity[data.modules[k].humidity.length -1],
						light: data.modules[k].light[data.modules[k].light.length -1],
						dust: data.modules[k].dust[data.modules[k].dust.length -1]
					};
				}
			}
			return {};
		};

		scanBluetooth = function (cb) {
			$http.get('/ajax/scanBluetooth')
				.success(function (bluetoothModules) {
					cb(bluetoothModules);
				})
				.error(function (err) {
					console.log('err', err);
				});
		};

		loadFoundBluetooth = function (cb) {
			$http.get('/ajax/loadFoundBluetooth')
				.success(function (bluetoothModules) {
					cb(bluetoothModules);
				})
				.error(function (err) {
					console.log('err', err);
				});
		};

		return {
			load: load,
			getLastStatusByName: getLastStatusByName,
			scanBluetooth: scanBluetooth,
			loadFoundBluetooth: loadFoundBluetooth
		};
	};

	angular.module('butler').factory('butlerDao', butlerDao);
})();