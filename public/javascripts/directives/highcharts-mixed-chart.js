(function () {
	'use strict';

	var highchartsMixedChart = function ($timeout) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directives/highcharts-mixed-chart.html',
            scope: {
                title: '@',
                timetable: '=',
                data: '='
            },
            link: function postLink(scope, element, attrs) {
                var oChart;

                var resetChart;
                
                
                resetChart = function () {
                    var option = {
                            chart: {
                                renderTo: element.find('.chart').get(0),
                                margin: [0, 0, 70, 0],
                                backgroundColor:null,
                                plotBorderColor: '#606063'
                            },
                            title: {
                                text: ''
                            },
                            //subtitle: {
                            //    text: 'Source: WorldClimate.com'
                            //},
                            xAxis: [{
                                categories: scope.timetable,
                                labels: {
                                     style: {
                                        color: '#E0E0E3'
                                     }
                                }
                            }],
                            yAxis: [{ // Primary yAxis
                                labels: {
                                    format: '{value}°C',
                                    style: {
                                        color: Highcharts.getOptions().colors[1]
                                    }
                                },
                                title: {
                                    text: 'Temperature',
                                    style: {
                                        color: Highcharts.getOptions().colors[1]
                                    }
                                },
                                gridLineWidth: 0,
                                minorGridLineWidth: 0
                            }, { // Secondary yAxis
                                title: {
                                    text: '',
                                    style: {
                                        color: Highcharts.getOptions().colors[0]
                                    }
                                },
                                labels: {
                                    format: '{value} %',
                                    style: {
                                        color: Highcharts.getOptions().colors[0]
                                    }
                                },
                                max: 100,
                                tickInterval: 10,
                                opposite: true,
                                gridLineWidth: 0,
                                minorGridLineWidth: 0
                            }],
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
                            series: [{
                                name: '습도',
                                type: 'column',
                                yAxis: 1,
                                data: scope.data.humidity,
                                tooltip: {
                                    valueSuffix: ' %'
                                }

                            },{
                                name: '조도',
                                type: 'column',
                                yAxis: 1,
                                data: scope.data.light,
                                tooltip: {
                                    valueSuffix: ' %'
                                }

                            },{
                                name: '먼지',
                                type: 'column',
                                yAxis: 1,
                                data: scope.data.dust,
                                tooltip: {
                                    valueSuffix: ' %'
                                }

                            }, {
                                name: '온도',
                                type: 'spline',
                                data: scope.data.temperature,
                                tooltip: {
                                    valueSuffix: '°C'
                                }
                            }]
                        };
                    oChart = new Highcharts.Chart(option);
                };

                scope.$watch('timetable', function (newVal, oldVal) {
                    if (newVal) {
                        resetChart();    
                    }
                });
                
            }
        };
    };

	angular.module('butler')
	    .directive('highchartsMixedChart', highchartsMixedChart);

})();