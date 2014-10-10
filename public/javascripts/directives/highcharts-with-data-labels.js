(function () {
	'use strict';

	var highchartsWithDataLabels = function ($timeout) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directives/highcharts-with-data-labels.html',
            scope: {
                title: '@',
                timetable: '=',
                data: '=',
                prefix: '@'
            },
            link: function postLink(scope, element, attrs) {
                var oChart;

                var resetChart, parseDataToSeries;

                parseDataToSeries = function (data) {
                    var series = [];
                    for (var k in data) {
                        series.push({
                            name: k,
                            type: 'spline',
                            data: data[k],
                            tooltip: {
                                valueSuffix: scope.prefix || '°C'
                            }
                        });
                    };
                    return series;
                };
                
                resetChart = function () {
                    if (scope.timetable) {
                        var option = {
                            chart: {
                                renderTo: element.find('.chart').get(0),
                                margin: [0, 0, 100, 0],
                                backgroundColor:null,
                                plotBorderColor: '#606063'
                            },
                            colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
                            title: {
                                text: null
                            },
                            xAxis: {
                                categories: scope.timetable,
                                labels: {
                                     style: {
                                        color: '#E0E0E3'
                                     }
                                }
                            },
                            yAxis: {
                                gridLineWidth: 0,
                                minorGridLineWidth: 0
                            },
                            tooltip: {
                                shared: true
                            },
                            plotOptions: {
                                series: {
                                    dataLabels: {
                                        color: '#B0B0B3'
                                    }
                                },
                                line: {
                                    dataLabels: {
                                        enabled: true
                                    },
                                    enableMouseTracking: false
                                }
                            },
                            legend: {
                              itemStyle: {
                                 color: '#E0E0E3'
                              },
                              itemHoverStyle: {
                                 color: '#FFF'
                              },
                              itemHiddenStyle: {
                                 color: '#606063'
                              }
                            },
                            series: parseDataToSeries(scope.data)
                        };
                        oChart = new Highcharts.Chart(option);
                    }
                };

                scope.$watch('timetable', function (newVal, oldVal) {
                    resetChart();
                });
                
            }
        };
    };

	angular.module('butler')
	    .directive('highchartsWithDataLabels', highchartsWithDataLabels);

})();