
(function() {
	'use strict';
	angular.module("app").controller("ProgressCtrl", ['$scope','$http',ProgressCtrl]);
	function ProgressCtrl($scope, $http, $timeout) {
		
		var ctrl = this;
		
		ctrl.horizonSlider1 = {
	        start: 30,
			connect: 'lower',
			step: 1,
			range: {
				min: 0,
				max: 100
			}
	    }

	    ctrl.horizonSlider2 = {
	        start: 60,
			connect: 'lower',
			step: 1,
			range: {
				min: 0,
				max: 100
			}
	    }

	    ctrl.horizonSlider3 = {
	        start: 50,
			connect: 'lower',
			step: 1,
			range: {
				min: 0,
				max: 100
			}
	    }

	    ctrl.horizonSlider4 = {
	        start: 80,
			connect: 'lower',
			step: 1,
			range: {
				min: 0,
				max: 100
			}
	    }

	    ctrl.horizonSlider5 = {
	        start: 20,
			connect: 'lower',
			step: 1,
			range: {
				min: 0,
				max: 100
			}
	    }

	    ctrl.horizonSlider6 = {
	        start: 50,
			connect: 'lower',
			step: 1,
			range: {
				min: 0,
				max: 100
			}
	    }


	    ctrl.verticalSlider1 = {
	        start: 30,
			connect: 'lower',
			step: 1,
			orientation: 'vertical',
			range: {
				min: 0,
				max: 100
			}
	    }

	    ctrl.verticalSlider2 = {
	        start: 50,
			connect: 'lower',
			step: 1,
			orientation: 'vertical',
			range: {
				min: 0,
				max: 100
			}
	    }

	    ctrl.verticalSlider3 = {
	        start: 40,
			connect: 'lower',
			step: 1,
			orientation: 'vertical',
			range: {
				min: 0,
				max: 100
			}
	    }

	    ctrl.verticalSlider4 = {
	        start: 60,
			connect: 'lower',
			step: 1,
			orientation: 'vertical',
			range: {
				min: 0,
				max: 100
			}
	    }

	    ctrl.verticalSlider5 = {
	        start: 80,
			connect: 'lower',
			step: 1,
			orientation: 'vertical',
			range: {
				min: 0,
				max: 100
			}
	    }

	    ctrl.verticalSlider6 = {
	        start: 70,
			connect: 'lower',
			step: 1,
			orientation: 'vertical',
			range: {
				min: 0,
				max: 100
			}
	    }

	    ctrl.rangedSlider = {
	        start: [300, 800],
			connect: true,
			step: 5,
			range: {
				min: 0,
				max: 1000
			}
	    }

	    ctrl.tabDragSlider = {
	        start: [200, 500],
			connect: true,
			step: 5,
			behaviour: 'tap-drag',
			range: {
				min: 0,
				max: 1000
			}
	    }

	    ctrl.stepSlider = {
	        start: 20,
			connect: 'lower',
			step: 10,
			pips: { mode: 'steps', density: 10 },
			range: {
				min: 0,
				max: 100
			}
	    }
	}
})();
