(function () {
	'use strict';

	var DashboardCtrl = function ($scope, $timeout, $routeParams, $location, $filter, butlerDao) {

        var periods, selectedPeriod;

        var loadData, parseTimetable, mergeData;
		
        periods = {
            '1hour': {
                'html': 'one-hour.html',
                'unixtime': 60 * 60 * 1,
                'format': 'H:mm'
            },
            '3hours': {
                'html': 'three-hours.html',
                'unixtime': 60 * 60 * 3,
                'format': 'H:mm'
            },
            '6hours': {
                'html': 'six-hours.html',
                'unixtime': 60 * 60 * 6,
                'format': 'H:mm'
            },
            '12hours': {
                'html': 'six-hours.html',
                'unixtime': 60 * 60 * 12,
                'format': 'H:mm'
            },
            '1day': {
                'html': 'six-hours.html',
                'unixtime': 60 * 60 * 24,
                'format': 'H:mm'
            },
            '1week': {
                'html': 'six-hours.html',
                'unixtime': 60 * 60 * 24 * 7,
                'format': 'd일'
            },
            '1month': {
                'html': 'six-hours.html',
                'unixtime': 60 * 60 * 24 * 31,
                'format': 'd일'
            }
        };

        if (_.indexOf(_.keys(periods), $routeParams.period) >= 0) {
            selectedPeriod = periods[$routeParams.period];
            // $scope.template = 'views/controllers/' + selectedPeriod.html;
        } else {
            $location.path('/dashboard/1hour');
            return;
        }

        $timeout(function () {
            loadData(selectedPeriod.unixtime);
        });

        loadData = function (unixtime) {
            butlerDao.load(unixtime, function (data) {
                $scope.butlerUptime = data.butlerUptime;
                $scope.timetable = parseTimetable(data.timetable);
                $scope.modules = data.modules;
                $scope.mergedData = mergeData(data.modules);
            });
        };

        parseTimetable = function (timetable) {
            var parsedTimetable = [];

            for (var k in timetable) {
                parsedTimetable.push($filter('date')(timetable[k], selectedPeriod.format));
            }
            return parsedTimetable;
        };

        mergeData = function (modules) {
            var mergedData = {},
                keys = _.keys(modules[_.keys(modules)[0]]);
            for (var k in keys) {
                var key = keys[k];
                mergedData[key] = {}
                for (var j in modules) {
                    mergedData[key][j] = modules[j][key];
                }
            }
            return mergedData;

        };

    };

	angular.module('butler')
	    .controller('DashboardCtrl', DashboardCtrl);

})();