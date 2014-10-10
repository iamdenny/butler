(function () {
	'use strict';

	var donutChart = function ($timeout) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directives/donut-chart.html',
            scope: {
                title: '@',
                data: '='
            },
            link: function postLink(scope, element, attrs) {
                var oChart;

                var resetChart;
                
                resetChart = function () {
                    if (scope.data) {
                        oChart = new Highcharts.Chart({
                            chart: {
                                renderTo: element.find('.chart').get(0),
                                margin: [0, 0, 0, 0],
                                backgroundColor: null,
                                plotBackgroundColor: 'none'
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
                                    // { name: scope.title, y: parseInt(scope.value,10), color: scope.color },
                                    // { name: 'rest', y: (100 - parseInt(scope.value,10)), color: '#3d3d3d' }
                                    { name: '큰방', y: 20, color: 'purple' },
                                    { name: '아들방', y: 10, color: 'blue' },
                                    { name: '서재', y: 10, color: 'red' },
                                    { name: '거실', y: 30, color: 'green' },
                                    { name: '주방', y: 5, color: 'brown' },
                                    { name: '앞 배란다', y: 5, color: 'yellow' },
                                    { name: '뒷 배란다', y: 5, color: 'gray' },
                                    { name: '화장실', y: 10, color: 'black' },
                                    { name: '안방 화장실', y: 5, color: 'white' }
                                ],
                                dataLabels: {
                                    enabled: false,
                                    color: '#000000',
                                    connectorColor: '#000000'
                                }
                            }]
                        });
                    }
                };

                scope.$watch('data', function (newVal, oldVal) {
                    resetChart();
                });
                
            }
        };
    };

	angular.module('butler')
	    .directive('donutChart', donutChart);

})();