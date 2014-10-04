(function () {
	'use strict';

	var donutChart = function ($timeout) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/donut-chart.html',
            scope: {
                title: '@',
                value: '@',
                color: '@'
            },
            link: function postLink(scope, element, attrs) {
                var oChart;
                
                $timeout(function () {
                    if (scope.value) {
                        oChart = new Highcharts.Chart({
                            chart: {
                                renderTo: element.find('.chart').get(0),
                                margin: [0, 0, 0, 0],
                                backgroundColor: null,
                                plotBackgroundColor: 'none',
                                            
                            },
                            
                            title: {
                                text: null
                            },

                            tooltip: {
                                formatter: function() { 
                                    return this.point.name +': '+ this.y +' %';
                                        
                                }   
                            },
                            series: [
                                {
                                borderWidth: 2,
                                borderColor: '#F1F3EB',
                                shadow: false,  
                                type: 'pie',
                                name: 'Income',
                                innerSize: '65%',
                                data: [
                                    { name: scope.title, y: parseInt(scope.value,10), color: scope.color },
                                    { name: 'rest', y: (100 - parseInt(scope.value,10)), color: '#3d3d3d' }
                                ],
                                dataLabels: {
                                    enabled: false,
                                    color: '#000000',
                                    connectorColor: '#000000'
                                }
                            }]
                        });
                    }
                });
                
            }
        };
    };

	angular.module('butler')
	    .directive('donutChart', donutChart);

})();