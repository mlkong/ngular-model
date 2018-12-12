
(function() {
	'use strict';
	angular.module("app").controller("chartJsCtrl", ['$scope','COLORS',chartJsCtrl]);
	function chartJsCtrl($scope, COLORS) {
		
		var ctrl = this;

		ctrl.lineLabels = ["January", "February", "March", "April", "May", "June", "July"];
        ctrl.lineSeries = ['Series A', 'Series B'];
        ctrl.lineData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
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
                        display: true,
                        position: 'right'
                    }
                ]
            }
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

        ctrl.barLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];
        ctrl.barSeries = ['Series A', 'Series B'];
        ctrl.barData = [
            [65, 59, 80, 81, 56, 55, 40, 37, 54, 76, 63, 62],
            [28, 48, 40, 19, 86, 27, 90, 43, 65 ,76, 87, 85]
        ];
        ctrl.barColors = [
            {
                backgroundColor: COLORS.infoInverse,
                borderColor: COLORS.info
            },
            {   
                backgroundColor: COLORS.dangerInverse,
                borderColor: COLORS.danger
                
            }
        ];


        ctrl.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        ctrl.pieData = [300, 300, 500];
        ctrl.pieColors = [
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
            }
        ];

        ctrl.donutLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        ctrl.donutData = [300, 500, 100];
        ctrl.donutOptions = {
            cutoutPercentage: 75
        }
        ctrl.donutColors = [
            {
                pointBackgroundColor: COLORS.info,
                backgroundColor: COLORS.info
            },
            {   
                pointBackgroundColor: COLORS.dark,
                backgroundColor: COLORS.dark
            },
            {   
                pointBackgroundColor: COLORS.success,
                backgroundColor: COLORS.success
            }
        ];

        ctrl.radarLabels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
        ctrl.radarData = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ];
        ctrl.radarColors = [
            {
                pointBackgroundColor: COLORS.success,
                borderColor: COLORS.success,
                backgroundColor: COLORS.successInverse
            },
            {   
                pointBackgroundColor: COLORS.warning,
                borderColor: COLORS.warning,
                backgroundColor: COLORS.warningInverse
            }
        ];

        ctrl.polarLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
        ctrl.polarData = [300, 400, 100, 200, 100];
        ctrl.polarColors = [
            {
                pointBackgroundColor: COLORS.success,
                borderColor: COLORS.success
            },
            {   
                pointBackgroundColor: COLORS.info,
                borderColor: COLORS.info
            },
            {   
                pointBackgroundColor: COLORS.warning,
                borderColor: COLORS.warning
            },
            {   
                pointBackgroundColor: COLORS.primary,
                borderColor: COLORS.primary
            },
            {   
                pointBackgroundColor: COLORS.danger,
                borderColor: COLORS.danger
            }
        ];
	}
})();
