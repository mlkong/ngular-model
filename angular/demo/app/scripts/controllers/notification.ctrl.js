
(function() {
	'use strict';
	angular.module("app").controller("NotificationCtrl", ['$scope','SweetAlert',NotificationCtrl]);
	function NotificationCtrl($scope, SweetAlert) {
		
		var ctrl = this;
		var i = -1;
  		var msgs = ['You have successfully trigger notification', 'Second notification', 'I saw you hit 3 times!', 'Time to stop?', 'I said enough!'];
		
		ctrl.showNoty = function() {
		    var msg = angular.element('#noty-message').val(),
		        type = angular.element('#noty-messenger-type').val().toLowerCase(),
		        position = angular.element('#noty-position').val();
		    if (!msg) {
		        msg = ctrl.getMessage();
		    }
		    if (!type) {
		        type = 'error';
		    }
		    var n = noty({
		        theme: 'default',
		        text: msg,
		        type: type,
		        timeout: 3000,
		        layout: position,
		        closeWith: ['button', 'click'],
		        animation: {
		        	open: 'noty-animation fadeIn',
		        	close: 'noty-animation fadeOut'
		        }
		    });
		};



		ctrl.getMessage = function() {
		    i++;
		    if (i === msgs.length) {
		        i = 0;
		    }
		    return msgs[i];
		};

		
		ctrl.notyType = [
			{
			    "value": "Information",
			    "text": "Information"
		    },
		    {
			    "value": "Success",
			    "text": "Success"
		    },
		    {
			    "value": "Error",
			    "text": "Error"
		    },
		    {
			    "value": "Warning",
			    "text": "Warning"
		    },
		    {
			    "value": "Confirm",
			    "text": "Confirm"
		    }
		];

		ctrl.position = [
		    {
			    "value": "topLeft",
			    "text": "Top Left"
		    },
		    {
			    "value": "top",
			    "text": "Top"
		    },
		    {
			    "value": "topRight",
			    "text": "Top Right"
		    },
		    {
			    "value": "bottomLeft",
			    "text": "Bottom Left"
		    },
		    {
			    "value": "bottom",
			    "text": "Bottom"
		    },
		    {
			    "value": "bottomRight",
			    "text": "Bottom Right"
		    }
		];

		ctrl.selectizeConfig = {
		    create: false,
		    maxItems: 1
		};


		ctrl.sweetAlert1 = function() {
			SweetAlert.swal("Here's a message");
		}

		ctrl.sweetAlert2 = function() {
			SweetAlert.swal("Here's a message!", "It's pretty, isn't it?");
		}

		ctrl.sweetAlert3 = function() {
			SweetAlert.swal("Good job!", "You clicked the button!", "success");
		}	

		ctrl.sweetAlert4 = function() {
			SweetAlert.swal({   
				title: "Are you sure?",   
				text: "Your will not be able to recover this imaginary file!",   
				type: "warning",   
				showCancelButton: true,   
				confirmButtonColor: "#DD6B55",   
				confirmButtonText: "Yes, delete it!",
				closeOnConfirm: false
			},  
			function(){  
				SweetAlert.swal("Booyah!");
			});
		}	

		ctrl.sweetAlert5 = function() {
			SweetAlert.swal({   
				title: "Are you sure?",   
				text: "Your will not be able to recover this imaginary file!",   
				type: "warning",   
				showCancelButton: true,   
				confirmButtonColor: "#DD6B55",   
				confirmButtonText: "Yes, delete it!",   
				cancelButtonText: "No, cancel plx!",   
				closeOnConfirm: false,   
				closeOnCancel: false 
			}, function(isConfirm){  
				if (isConfirm) {     
					SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");   
				} else {     
					SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");   
				} 
			});
		}	

	}
})();
