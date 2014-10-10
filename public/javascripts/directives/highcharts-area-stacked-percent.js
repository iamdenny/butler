(function () {
	'use strict';

	var highchartsAreaStackedPercent = function ($timeout) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directives/highcharts-area-stacked-percent.html',
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
                            plotBorderColor: '#606063',
                            type: 'area'
                        },
                        title: {
                            text: ''
                        },
                        xAxis: {
                            categories: ['3시', '4시', '5시', '6시', '7시', '8시'],
                            tickmarkPlacement: 'on',
                            title: {
                                enabled: false
                            }
                        },
                        yAxis: {
                            title: {
                                text: 'Percent'
                            },
                            gridLineWidth: 0,
                                minorGridLineWidth: 0
                        },
                        tooltip: {
                            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
                            shared: true
                        },
                        plotOptions: {
                            area: {
                                stacking: 'percent',
                                lineColor: '#ffffff',
                                lineWidth: 1,
                                marker: {
                                    lineWidth: 1,
                                    lineColor: '#ffffff'
                                }
                            }
                        },
                        series: [{
                            name: '큰방',
                            data: [502, 635, 809, 947, 1402, 3634]
                        }, {
                            name: '아들방',
                            data: [106, 107, 111, 133, 221, 767]
                        }, {
                            name: '서재',
                            data: [163, 203, 276, 408, 547, 729]
                        }, {
                            name: '거실',
                            data: [18, 31, 54, 156, 339, 818]
                        }, {
                            name: '주방',
                            data: [2, 2, 2, 6, 13, 30]
                        }]
                    };
                    oChart = new Highcharts.Chart(option);
                };

                scope.$watch('data', function (newVal, oldVal) {
                    resetChart();
                });
                
            }
        };
    };

	angular.module('butler')
	    .directive('highchartsAreaStackedPercent', highchartsAreaStackedPercent);

})();