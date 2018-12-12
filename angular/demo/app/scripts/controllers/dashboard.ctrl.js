
(function() {
	'use strict';
	angular.module("app").controller("DashboardCtrl", ['$scope','$http','COLORS',DashboardCtrl]);
	function DashboardCtrl($scope, $http, COLORS) {
		
		var ctrl = this;
		
		ctrl.dashboardNews1 = {
			infinite : true,
			speed : 300,
			slidesToShow : 1,
			slidesToScroll : 1,
			autoplay : true,
			dots : true,
			arrows : true,
			autoplaySpeed : 5000
		};
		
		ctrl.overviewChartConfig = {
            chart: {
                type: 'lineChart',
				height: '214',
                x: function(d) {
                    return d[0]
                },
                y: function(d) {
                    return d[1]
                },
				color: [
                    'd2e1ff',
					'fee5ea',
					'e2f0cc',
					'ffedd3'	
                ],
                margin: {
                    left: 30,
                    bottom: 35
                },
                xAxis: {
                    tickFormat: function(d) {
                        return d3.time.format('%a')(new Date(d))
                    }
                },
                yAxis: {
                    tickFormat: d3.format('d')
                },
                useInteractiveGuideline: true,
            }
        }

        $scope.monthlyTarget = {
            map: 'us_aea',
            backgroundColor: 'transparent',
            strokeWidth: 1,
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: 'transparent',
                    'stroke-width': 1,
                    'stroke': '#b5bad6',
                    'stroke-opacity': 1,
                    'cursor': 'pointer'
                },
                hover: {
                    'fill-opacity': 0.7
                }
            },
            markerStyle: {
                initial: {
                    fill: COLORS.info,
                    stroke: COLORS.info,
                    'fill-opacity': 1,
                    'stroke-width': 8,
                    'stroke-opacity': 0.3,
                    'cursor': 'pointer',
                    r: 5
                },
                hover: {
                    r: 8,
                    stroke: COLORS.info,
                    'stroke-width': 10
                }
            },

            series: {
                regions: [{
                    values: {
                        "US-NE": COLORS.gray,
                        "US-GA": COLORS.success,
                        "US-TX": COLORS.info,
                        "US-UT": COLORS.primary
                    },
                    attribute: 'fill'
                }]
            }
        };

        ctrl.sparklineBarData1 = [32, 38, 36, 35, 38, 37, 35, 34, 36, 38, 36, 37, 35, 34, 37, 38, 38];
        ctrl.sparklineBarOption1 = {
            type: 'bar',
            height: '60',
            barWidth: 3,
            barSpacing: 8,
            barColor: COLORS.info
        };

        ctrl.lineLabels = ["16th", "17th", "18th", "19th", "20th", "21th", "22th"];
        ctrl.lineSeries = ['Series A', 'Series B'];
        ctrl.lineData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 90, 27, 75]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        ctrl.lineDatasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        ctrl.lineOptions = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: false
                    }
                ]
            },
            maintainAspectRatio: false
        };
        ctrl.lineColors = [
            {
                backgroundColor: COLORS.infoInverse,
                borderColor: COLORS.info
            },
            {   
                backgroundColor: COLORS.successInverse,
                borderColor: COLORS.success
                
            }
        ];

        ctrl.donutLabels = ["Texas", "Utah", "Georgia", "Nebraska"];
        ctrl.donutData = [300, 500, 100, 200];
        ctrl.donutOptions = {
            cutoutPercentage: 75,
            maintainAspectRatio: false
        }
        ctrl.donutColors = [
            {
                pointBackgroundColor: COLORS.info,
                backgroundColor: COLORS.info
            },
            {   
                pointBackgroundColor: COLORS.primary,
                backgroundColor: COLORS.primary
            },
            {   
                pointBackgroundColor: COLORS.success,
                backgroundColor: COLORS.success
            },
            {   
                pointBackgroundColor: COLORS.gray,
                backgroundColor: COLORS.gray
            }
        ];
	}
})();
