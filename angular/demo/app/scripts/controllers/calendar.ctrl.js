
(function() {
	'use strict';
	angular.module("app").controller("CalendarCtrl", ['$scope','$uibModal','$log','$timeout', '$interval',CalendarCtrl]);
	function CalendarCtrl($scope, $uibModal, $modalInstance, $log, uiCalendarConfig) {
		
		var ctrl = this;
		var date = new Date();
	    var d = date.getDate();
	    var m = date.getMonth();
	    var y = date.getFullYear();

		ctrl.calendarConfig = {
	        calendar:{
		        height: 800,
		        editable: true,
		        header:{
		            left: 'month,agendaWeek,agendaDay',
		            center: 'title',
		            right: 'today prev,next'
	        	},
		        eventClick: $scope.eventEdit
	      	}
	    };		

	    ctrl.addEvent = function() {
	        $scope.events.push({
	            title: 'Untitle Event',
	            start: new Date(y, m, 28),
	            end: new Date(y, m, 29),
	            desc: 'Meetings',
	            className: ['openSesame']
	        });
	    };

	    ctrl.remove = function(index) {
	        $scope.events.splice(index,1);
	    };  

	    $scope.events = [
	        {
	        	title: 'All Day Event',
	        	start: new Date(y, m, 1),
	        	desc:'Meetings',
	        	bullet: 'success'
	        },
	        {
	        	title: 'Long Event',
	        	start: new Date(y, m, d - 5),
	        	end: new Date(y, m, d - 2),
	        	desc:'Hangouts',
	        	bullet: 'success'
	        },
	        {
	        	title: 'Repeating Event',
	        	start: new Date(y, m, d - 3, 16, 0),
	        	allDay: false,
	        	desc:'Product Checkup',
	        	bullet: 'warning'
	        },
	        {
	        	title: 'Repeating Event',
	        	start: new Date(y, m, d + 4, 16, 0),
	        	allDay: false,
	        	desc:'Conference',
	        	bullet: 'danger'
	        },
	        {
	        	title: 'Birthday Party',
	        	start: new Date(y, m, d + 1, 19, 0),
	        	end: new Date(y, m, d + 1, 22, 30),
	        	allDay: false,
	        	desc:'Gathering'
	        },
	        {
	        	title: 'Click for Google',
	        	start: new Date(y, m, 28),
	        	end: new Date(y, m, 29),
	        	url: 'http://google.com/',
	        	desc:'Google',
	        	bullet: 'success'
	        }
	    ];

	    $scope.eventSources = [$scope.events];

	   	$scope.eventEdit = function (_event, date, jsEvent, view) {
			var modalInstance = $uibModal.open({
			  templateUrl: 'views/apps/calendar-modal.html',
			  controller: CalendarModalCtrl,
			  controllerAs: 'ctrl',
			  resolve: {
                event: function()
                {
                    return _event;
                }
            }
			});
		};

		function CalendarModalCtrl ($scope, $uibModalInstance, event, $timeout, $interval) {
			var ctrl = this;

			$scope.event = event;

			ctrl.ok = function () {
				$uibModalInstance.close();
			};

			ctrl.cancel = function () {
				$uibModalInstance.dismiss('cancel');
			};
		};
	}
})();
