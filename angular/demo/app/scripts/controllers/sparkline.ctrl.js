
(function() {
	'use strict';
	angular.module("app").controller("sparklineCtrl", ['$scope','COLORS',sparklineCtrl]);
	function sparklineCtrl($scope, COLORS) {
		
		var ctrl = this;

        ctrl.sparklineBarData1 = [8, 10, 8, 10, 9, 10, 8, 9, 10, 10, 7, 10, 9, 7, 8, 8];
        ctrl.sparklineBarData2 = [0, 8, 10, 8, 10, 9, 10, 8,10, 10, 7, 10, 9,];
        ctrl.sparklineBarOption1 = {
            type: 'bar',
            height: '60',
            barWidth: 7,
            barSpacing: 5,
            barColor: COLORS.info
        };
        ctrl.sparklineBarOption2 = {
            type: 'bar',
            height: '100',
            barWidth: 7,
            barSpacing: 5,
            barColor: COLORS.success
        };

        ctrl.sparklineLineData1 = [32, 38, 36, 35, 38, 37, 35, 34, 36, 38, 36, 37, 35, 34, 37, 38, 38];
        ctrl.sparklineLineData2 = [7, 8, 10, 8, 10, 9, 10, 8,10, 10, 9, 10, 9,];
        ctrl.sparklineLineOptions1 = {
            type: 'line',
            width: '130',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor:false,
            lineWidth: 1,
            height: '50',
            fillColor: COLORS.primaryInverse,
            lineColor: COLORS.primary,
            highlightLineColor: 'rgba(0,0,0,.09)',
            highlightSpotColor: 'rgba(0,0,0,.21)',
        };
        ctrl.sparklineLineOptions2 = {
            type: 'line',
            width: '130',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor:false,
            lineWidth: 1,
            height: '50',
            fillColor: COLORS.successInverse,
            lineColor: COLORS.success,
            highlightLineColor: 'rgba(0,0,0,.09)',
            highlightSpotColor: 'rgba(0,0,0,.21)',
        };
        ctrl.sparklineLineOptions3 = {
            type: 'line',
            width: '130',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor:false,
            lineWidth: 1,
            height: '100',
            fillColor: COLORS.dangerInverse,
            lineColor: COLORS.danger,
            highlightLineColor: 'rgba(0,0,0,.09)',
            highlightSpotColor: 'rgba(0,0,0,.21)',
        };
        ctrl.sparklineLineOptions4 = {
            type: 'line',
            width: '130',
            spotColor: false,
            minSpotColor: false,
            maxSpotColor:false,
            lineWidth: 1,
            height: '100',
            fillColor: 'rgba(0,0,0,0)',
            lineColor: COLORS.warning,
            highlightLineColor: 'rgba(0,0,0,.09)',
            highlightSpotColor: 'rgba(0,0,0,.21)',
        };

        ctrl.sparklinePieData1 = [4, 3, 2, 1];
        ctrl.sparklinePieOptions1 = {
            type: 'pie',
            height: '100',
            sliceColors: [COLORS.danger, COLORS.success, COLORS.info, COLORS.warning]

        };

        ctrl.sparklineDiscreteOptions1 = {
            type: 'discrete',
            width: '130',
            lineColor: COLORS.primary,
            height: '100',
            lineHeight: 60    
        };

        ctrl.sparklineTristateData1 = [1,1,0,1,-1,-1,1,-1,0,0,1,1 ];
        ctrl.sparklineTristateOptions1 = {
            type: 'tristate',
            width: '130',
            height: '100', 
            posBarColor: COLORS.success,
            negBarColor: COLORS.danger,
            barWidth: 7,
            barSpacing: 1
        };
	}
})();
